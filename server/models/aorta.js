'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const aorta= sequelize.define('aorta', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return aorta;
};