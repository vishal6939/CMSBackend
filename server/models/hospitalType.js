module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const HospitalType= sequelize.define('hospitalType', {   
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
    return HospitalType;
  };