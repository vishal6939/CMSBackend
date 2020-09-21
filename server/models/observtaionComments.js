module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const observtaionComments= sequelize.define('observtaionComments', {                   
            comment: {
            type: DataTypes.STRING,
            required: true
            },  
            patientId:{
            type:DataTypes.INTEGER,
            required:true
            },            
            type: {
            type: DataTypes.STRING,
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
        return observtaionComments;
      };