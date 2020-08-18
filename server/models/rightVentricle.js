'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const rightVentricle= sequelize.define('rightVentricle', {   
      key: {
        type: DataTypes.INTEGER,
        // autoIncrement: true,
        // primaryKey: true
      },
      value: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return rightVentricle;
};