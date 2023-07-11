// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage, Event, Stage_Event } = db
const { Op } = require('sequelize') 

// FIND ALL StageS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            attributes: [['name', 'Stage Name'], 'food',['crowd_capacity', 'Capacity'] ],
            order: [['name', 'ASC']],
            where: {
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Stage
stages.get('/:name', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: {
                stage_name: req.params.name
            },
            include: {
                model: Event,
                as: "events",
                through: Stage_Event
            }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Stage
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Stage
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = stages