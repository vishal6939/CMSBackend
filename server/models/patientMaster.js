module.exports = (sequelize, DataTypes) => {
	const PatientMaster = sequelize.define('patientMaster', {
        
salutation :  {
    type: DataTypes.STRING
},
firstname : {
    type: DataTypes.STRING
},
middlename: {
    type: DataTypes.STRING
},
lastname : {
    type: DataTypes.STRING
},
complains : {
    type: DataTypes.JSON
},
gender : {
    type: DataTypes.STRING
},
martialstatus : {
    type: DataTypes.STRING
},
occupation : {
    type: DataTypes.STRING
},
religion : {
    type: DataTypes.STRING
},
dob : {
    type: DataTypes.STRING
},
country : {
    type: DataTypes.STRING
},
state : {
    type: DataTypes.STRING
},
referred : {
   type: DataTypes.STRING
},
fdoctor : {
    type: DataTypes.STRING
},

age : {
    type: DataTypes.STRING
},

district : {
    type: DataTypes.STRING
},
city : {
    type: DataTypes.STRING
},
// Name of the village / City C - 15
email : {
    type: DataTypes.STRING
},
countrycode: {
    type: DataTypes.STRING
},

// Registered Mobile no C – 10
regmobileno : {
    type: DataTypes.STRING
},
kinmobileno : {
    type: DataTypes.STRING
},
wtsno : {
    type: DataTypes.STRING
},
// Whats app no C – 10
address : {
    type: DataTypes.STRING
},
Address2 : {
    type: DataTypes.STRING
},
Address3 : {
    type: DataTypes.STRING
},
pincode : {
    type: DataTypes.STRING
},
identificationmarks: {
    type: DataTypes.STRING
},
scars : {
    type: DataTypes.STRING
},
qualification : {
    type: DataTypes.STRING
},
reason : {
    type: DataTypes.STRING
},
// master : {
//     type: DataTypes.STRING
// },
photooftheperson : {
    type: DataTypes.STRING
},
// For uploading allow only tiff, jpeg and the pdf files
datefirstvisit  : {
    type: DataTypes.DATEONLY
},
});
	
return PatientMaster;
}