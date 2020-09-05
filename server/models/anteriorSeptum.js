'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const anteriorSeptum= sequelize.define('anteriorSeptum', {   
    
      itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return anteriorSeptum;
};