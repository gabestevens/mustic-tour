'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('stages', [{
      stage_id: 1,
      name: 'Coachella',
      address: 'Palm Springs',
      crowd_capacity: 10000,
      food: 'Vendors', 
   }, {
     stage_id: 2, 
     name: 'EDC',
     address: 'Las Vegas',
     crowd_capacity: 20000,
     food: 'NONE'
     }, {
     stage_id: 3,
     name: 'Holo Holo California',
     address: 'old Sacramento Town',
     crowd_capacity: 1000,
     food: 'Vendors'
    }
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};