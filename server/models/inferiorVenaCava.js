'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const inferierVencava= sequelize.define('inferiorvenacava', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return inferierVencava;
};