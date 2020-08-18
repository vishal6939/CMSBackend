module.exports = (sequelize, DataTypes) => {
	const kinMaster = sequelize.define('kinmaster', {
        

patientname: {
    type: DataTypes.STRING
},
  kinname: {
    type: DataTypes.STRING
},
  kinno: {
    type: DataTypes.STRING
},  
  fdoctor: {
    type: DataTypes.STRING
},
  phfdoctor: {
    type: DataTypes.STRING
},
  emaildoc: {
    type: DataTypes.STRING
},
  emailkin: {
    type: DataTypes.STRING
},
datefirstvisit  : {
  type: DataTypes.DATEONLY
},
});
	
return kinMaster;
}