module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const ImpressionReport= sequelize.define('impressionreport', { 
        impressions: {
            type: DataTypes.JSON,
           required: true
            },         
  impressionscomment: {
                type: DataTypes.STRING,
               required: true
                },  
        patientId:{
    type:DataTypes.INTEGER,
    required:true
    }
            });
        return ImpressionReport;
      };