'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('payouts',{
      fields:['mid'],
      type: 'foreign key',
      name: 'payout_merchant_association',
      references:{
        table: 'merchants',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('payouts',{
      fields:['mid'],
      type: 'foreign key',
      name: 'payout_merchant_association',
      references:{
        table: 'merchants',
        field: 'id'
      }
    })
  }
};
