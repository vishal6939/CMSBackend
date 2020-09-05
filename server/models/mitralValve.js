'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const matrialValve= sequelize.define('matrialValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return matrialValve;
};