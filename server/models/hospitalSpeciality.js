module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const HospitalSpeciality= sequelize.define('hospitalSpeciality', {   
        key: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        value: {
          type: DataTypes.JSON,
         required: true
          },     
      });
    return HospitalSpeciality;
  };