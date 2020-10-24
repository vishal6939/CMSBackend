'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const complains= sequelize.define('complains', {   
            itemName: {
            type: DataTypes.STRING,
            required: true
            }, 
            complainsId: {
            type: DataTypes.INTEGER,
            required: true
            },    
            patientId: {
            type: DataTypes.INTEGER,
            required: true
            }, 
            itemid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
            },
            id:{
            type:DataTypes.INTEGER
            }
    });
  return complains;
};