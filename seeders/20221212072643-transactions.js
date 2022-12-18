'use strict';
const faker = require('faker');
const transactions = [...Array(50)].map((transaction) => (
  {
    amount: faker.random.arrayElement([110,210,300,420,332,122,432,344,321,323,405,767]),
    status: faker.random.arrayElement(["failed","success","pending"]),
    mid: faker.random.arrayElement([1,2,3,4,5,6,7,8]),
    created_at: new Date(),
    updated_at: new Date()
  }
))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('transactions', transactions, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('transactions', null, {});
  }
};