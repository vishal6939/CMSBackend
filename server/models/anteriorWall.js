'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const anteriorWall = sequelize.define('anteriorWall', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return anteriorWall;
};