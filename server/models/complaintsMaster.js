'use strict'

module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const complaintsMaster= sequelize.define('complaintsMaster', {   
      itemName: {
        type: DataTypes.STRING,
       required: true
        }  
      });
    return complaintsMaster;
  };