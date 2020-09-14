module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const DoctorAdviceReport= sequelize.define('doctoradvicereport', { 
        doctoradvice: {
            type: DataTypes.JSON,
           required: true
            },         
  doctoradvicecomment: {
                type: DataTypes.STRING,
               required: true
                },  
        patientId:{
    type:DataTypes.INTEGER,
    required:true
    }
            });
        return DoctorAdviceReport;
      };