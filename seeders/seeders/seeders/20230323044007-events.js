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
     await queryInterface.bulkInsert('events', [{
      event_id: 1,
      name: 'Coachella',
      start_time: '09:00:00',
      end_time: '15:00:00',
      date: 2023-04-14, 
   }, {
     event_id: 2, 
     name: 'EDC',
     start_time: '10:30:00',
     end_time: '23:30:00',
     date: 2023-05-19
     }, {
     event_id: 3,
     name: 'Holo Holo California',
     start_time: '10:00:00',
     end_time: '20:30:00',
     date: 2023-09-09
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