'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const leftVentricalFunction= sequelize.define('leftventricalfunction', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return leftVentricalFunction;
};