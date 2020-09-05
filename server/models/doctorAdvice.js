'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const doctorAdvice= sequelize.define('doctorAdvice', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return doctorAdvice;
};