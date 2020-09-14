'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressions= sequelize.define('impressions', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressions;
};