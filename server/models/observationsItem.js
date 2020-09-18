'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const observationsItem= sequelize.define('observationsItem', {   
            itemName: {
            type: DataTypes.STRING,
            required: true
            }, 
            type: {
            type: DataTypes.STRING,
            required: true
            },  
            observationId: {
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
  return observationsItem;
};