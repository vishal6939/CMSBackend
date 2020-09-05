'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const venous= sequelize.define('venous', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return venous;
};