'use strict';
const faker = require('faker');
const merchants = [...Array(10)].map((merchant) => (
  {
    name: faker.unique(faker.name.firstName),
    eligible: faker.random.arrayElement([1,0]),
    created_at: new Date(),
    updated_at: new Date()
  }
))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('merchants', merchants, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('merchants', null, {});
  }
};