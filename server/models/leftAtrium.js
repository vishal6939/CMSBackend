'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const leftAtrium= sequelize.define('leftAtrium', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return leftAtrium;
};