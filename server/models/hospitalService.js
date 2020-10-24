'use strict'

module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const HospitalService= sequelize.define('hospitalService', {   
      itemName: {
        type: DataTypes.STRING,
       required: true
        }       
      });
    return HospitalService;
  };