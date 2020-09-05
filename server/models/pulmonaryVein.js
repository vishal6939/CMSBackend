'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const pulmonaryVein= sequelize.define('pulmonaryVein', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return pulmonaryVein;
};