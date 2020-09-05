'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const conclusion= sequelize.define('conclusion', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return conclusion;
};