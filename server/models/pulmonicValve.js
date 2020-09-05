'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const pulmonicValve= sequelize.define('pulmonicValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return pulmonicValve;
};