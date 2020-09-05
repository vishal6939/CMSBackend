'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const pericardium= sequelize.define('pericardium', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return pericardium;
};