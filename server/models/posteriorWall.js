'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const posteriorWall= sequelize.define('posteriorwall', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return posteriorWall;
};