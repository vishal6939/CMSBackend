module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const RegionalWallMotion= sequelize.define('regionalwallmotion', { 
              anteriorwall: {
              type: DataTypes.STRING,
              required: true,
              },
              posteriorwall: {
              type: DataTypes.STRING,
              required: true
              },    
              inferiorwall: {
              type: DataTypes.STRING,
              required: true
              },    
              lateralwall: {
              type: DataTypes.STRING,
              required: true
              },
              pulmonaryarterypressure: {
              type: DataTypes.STRING,
              required: true
              },      
              valueofef: {
              type: DataTypes.STRING,
              required: true
              },    
              avgsystolicstrain: {
              type: DataTypes.STRING,
              required: true
              },
              peaksystolicstrain: {
              type: DataTypes.JSON,
              required: true
              },
              patientId:{
              type:DataTypes.INTEGER,
              required:true
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
                        return RegionalWallMotion;
                      };