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
    await queryInterface.bulkInsert('bands', [{
       band_id: 1,
       name: 'Linkin Park',
       genre:'Rock Band',
       members: 7,
       available_start_time: '13:00:00',
       end_time: '14:00:00'
    }, {
      band_id: 2, 
      name: 'Queen',
      genre:'R&B / Soul',
      members: 4,
      available_start_time: '11:30:00',
      end_time: '12:10:00'
      }, {
      band_id: 3,
      name: 'AC/DC',
      genre:'Rock B',
      members: 6,
      available_start_time: '20:00:00',
      end_time: '21:30:00'
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