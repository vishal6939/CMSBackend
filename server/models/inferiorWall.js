'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const interiorWall= sequelize.define('interiorwall', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return interiorWall;
};