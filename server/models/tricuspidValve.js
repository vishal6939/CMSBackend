'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const tricuspidValve= sequelize.define('tricuspidValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return tricuspidValve;
};