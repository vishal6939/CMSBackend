'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const inferiorSeptum= sequelize.define('inferiorSeptum', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return inferiorSeptum;
};