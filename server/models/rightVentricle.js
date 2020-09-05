'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const rightVentricle= sequelize.define('rightVentricle', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return rightVentricle;
};