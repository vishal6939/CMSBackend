'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const speckleTracking= sequelize.define('speckleTracking', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return speckleTracking;
};