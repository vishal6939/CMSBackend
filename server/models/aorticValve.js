'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const aorticValve= sequelize.define('aorticValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return aorticValve;
};