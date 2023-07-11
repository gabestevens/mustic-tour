'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(Event, Stage) {
      // define association here
      Stage_Event.belongsToMany(Stage, {
        foreignKey: 'stage_id',
        as: 'events',
        through: Stage_Event
      })
    }
  }
  Stage_Event.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage_Event',
    tableName: 'stage_events',
    timestamps: false
  });
  return Stage_Event;
};