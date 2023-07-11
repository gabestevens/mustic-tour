// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event, Meet_Greet, Set_Time, Stage, Band, Stage_Event } = db
const { Op } = require('sequelize') 
const band = require('../models/band')

// FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            attributes: [['name', 'Event Name'], 'date',['start_time', 'Start Time'] ],
            // order: [['start_time', 'ASC']],
            where: {
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
events.get('/:name', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: {
                event_name: req.params.name
            },
            include: [
                {
                    model: Meet_Greet,
                    as: "meet_greets",
                    include: {
                        model: Band,
                        as: "band",
                    }
                }, {
                    model: Set_Time,
                    as: "set_times",
                    include: [
                        {
                        model: Band,
                        as: "bands",                       
                        }, {
                            model: Stage,
                            as: "stages"
                        }
                    ]
                }, 
                {
                    model: Stage,
                    as: "stages",
                    through: Stage_Event
                }
            ]
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A EVENT
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A EVENT
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A EVENT
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = events