'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'bands',
      'recommendation',
      {
        type: DataTypes.TEXT,
        defaultValue: 'amazing'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'bands',
      'recommendation',
      {
        type: DataTypes.STRING,
        defaultValue: null
      }
    )
  }
};