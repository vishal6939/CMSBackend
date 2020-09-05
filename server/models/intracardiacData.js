'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const intraCardiacData= sequelize.define('intracardaicdata', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return intraCardiacData;
};