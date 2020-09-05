'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const rightAtrium= sequelize.define('rightAtrium', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return rightAtrium;
};