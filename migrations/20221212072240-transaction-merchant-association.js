'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('transactions',{
      fields:['mid'],
      type: 'foreign key',
      name: 'transaction_merchant_association',
      references:{
        table: 'merchants',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('transactions',{
      fields:['mid'],
      type: 'foreign key',
      name: 'transaction_merchant_association',
      references:{
        table: 'merchants',
        field: 'id'
      }
    })
  }
};
