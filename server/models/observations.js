'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const Observations = sequelize.define('observations', {
  patientId:{
    type: DataTypes.INTEGER,
    required: true
  },
  key:{
    type: DataTypes.INTEGER,
    required: true
  },
  type:{
    type: DataTypes.ENUM('leftVentricalObservation','rightVentricleObservation','leftAtriumObservation','rightAtriumObservation',
            'mitralValveObservation','tricuspidValveObservation','pulmonaryArteryObservation','pulmonicValveObservation',
            'aortaObservation','pericardiumObservation')
  },
  value:{
    type: DataTypes.JSON, 
    required: true
  },
  itemName:{
    type: DataTypes.JSON, 
    required: true
  },
  comment:{
    type: DataTypes.JSON, 
    required: true
  },
  
   }, 
  {
    underscored: true
  });
  return Observations;
};