module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const SpeckleTrackingReport= sequelize.define('speckletrackingreport', { 
            itemName: {
            type: DataTypes.STRING,
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
        return SpeckleTrackingReport;
      };