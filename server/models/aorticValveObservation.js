'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const aorticValve= sequelize.define('aorticValveObservation', {   
      key: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      value: {
        type: DataTypes.JSON,
       required: true
        },     
    });
  return aorticValve;
};