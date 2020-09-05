'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const pulmonaryArtery= sequelize.define('pulmonaryArtery', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return pulmonaryArtery;
};