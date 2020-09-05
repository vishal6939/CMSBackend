'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const rightVentricalFunction= sequelize.define('rightventricalfunction', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return rightVentricalFunction;
};