module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const EducationalMaster= sequelize.define('educationalMaster', {   
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
    return EducationalMaster;
  };