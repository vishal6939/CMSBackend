'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const leftVentricalFunction= sequelize.define('leftventricalfunction', {   
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
  return leftVentricalFunction;
};