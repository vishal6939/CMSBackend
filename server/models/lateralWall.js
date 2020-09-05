'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const lateralWall= sequelize.define('lateralwall', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return lateralWall;
};