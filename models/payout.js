'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payout.init({
    amount: DataTypes.INTEGER,
    mid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payout',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Payout;
};