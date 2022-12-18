'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Merchant.init({
    name: DataTypes.STRING,
    eligible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'merchant',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Merchant;
};