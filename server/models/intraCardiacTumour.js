'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const intraCardiacTumour= sequelize.define('intracardiactumour', {   
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
  return intraCardiacTumour;
};