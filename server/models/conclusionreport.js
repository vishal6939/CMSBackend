module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const ConclusionReport= sequelize.define('conclusionreport', { 
        conclusions: {
            type: DataTypes.JSON,
           required: true
            },         
  conclusionscomment: {
                type: DataTypes.STRING,
               required: true
                },  
        patientId:{
    type:DataTypes.INTEGER,
    required:true
    }
            });
        return ConclusionReport;
      };