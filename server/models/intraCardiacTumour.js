'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const intraCardiacTumour= sequelize.define('intracardiactumour', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return intraCardiacTumour;
};