'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const AssignmentStatus = sequelize.define('assignmentStatus', { 
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false
    // },
    
      name: {
        type: DataTypes.STRING,
       required: true
  
      },
      mobNo: {
        type: DataTypes.STRING,
       required: true
  
      },
      email: {
        type: DataTypes.STRING,
       required: true
  
      },
      status: {
        type: DataTypes.STRING,
       required: true
  
      },
      clinicId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    docId: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  reason:{
    type: DataTypes.STRING,
    
  }
    },
   
  {
    underscored: true
  });
  return AssignmentStatus;
};