'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const periCardialEffusion= sequelize.define('pericardialeffusion', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return periCardialEffusion;
};