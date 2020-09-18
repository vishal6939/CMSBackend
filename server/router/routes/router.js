const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
// const multipart = require('connect-multiparty');
const fs = require('fs');
const multer = require('multer');
const UUID = require('uuid-generate')
const multipart = require('connect-multiparty');
const Sequelize = require('sequelize');
const uniqueKey = UUID.generate()
const express = require('express')
const app = express()
// const port = 3000
const db = require('../../config/db');
const Patient = db.patientmodel;
var GetDicomData = require('../../controller/controller')
// const bodyParser = require("body-parser");
// const cors = require('cors')
const upload = require('../../config/upload');
var dicomParser = require('../../../node_modules/dicom-parser/dist/dicomParser');

// Load in Rusha so we can calculate sha1 hashes
 var Rusha = require('../../../node_modules/rusha/dist/rusha');


module.exports = function(app) {
  const controller = require('../../controller/controller'); 
	//app.post('/api/auth/registration',  controller.registration);
	
	app.post('/api/auth/signin', controller.signin);

	app.post('/api/auth/assignment',  controller.assignmentStatus);
// CLINIC
app.get('/api/test/user', [authJwt.verifyToken], controller.clinicContent);
app.put('/api/auth/updateclinic/:id',  controller.updateClinicContent);
app.delete('/api/auth/deleteclinic/:id',  controller.deleteClinic);
app.get('/api/auth/clinic', controller.getAllClinics);
app.get('/api/test/clinic/:id', controller.getClinics);


// DOCTOR
app.get('/api/auth/doctors/:clinicId',controller.doctors)
app.put('/api/auth/updatedoctor/:id',  controller.updateDoctors);
app.delete('/api/auth/deletedoctor/:id',  controller.deleteDoctors);
app.get('/api/auth/doctor', controller.getAllDoctors);
app.get('/api/test/doctor/:id', controller.getDoctors);

 // ASIGNMENT
 app.get('/api/test/assignment/:id', controller.getListOfAssignments);
 app.put('/api/auth/updateassignment/:id',  controller.updateAssignment);
app.delete('/api/auth/deleteassignment/:id',  controller.deleteAssignment);
app.get('/api/update/assignment/:id',controller.getAssignments)
app.get('/api/dep/assignment/:id', controller.getListOfAssignmentsinDoctor);

//Master
app.get('/api/auth/master/:data',controller.master );


//patient

// app.post('/api/create/patient/:id',dicomupload.array('dicomUploads'),controller.createPatient
// );
app.put('/api/update/patient/:id',controller.updatePatient);
app.delete('/api/delete/patient/:id',controller.deletePatient);
app.get('/api/findall/patient/:clinicId/:status',controller.findpatient);
//app.get('/api/findall/patient/:docId',controller.getAllPatients);
app.get('/api/findall/patdoc/:docId',controller.getAllPatients);
app.get('/api/findOne/patient/:id',controller.getPatient)

app.get('/api/findAll/patients/:clinicId',controller.getClinic)


///patient master api's
app.post('/api/auth/patientmaster',controller.patientMaster)
app.get('/api/auth/findpatientmaster',controller.findPatientMaster)
app.get('/api/auth/findonepatientmaster/:id',controller.findOnePatientMaster)
app.put('/api/auth/updatepatientmaster/:id',controller.updatePatientMaster)
app.delete('/api/auth/deletepatientmaster/:id',  controller.deletePatientMaster);


////kin api's
app.post('/api/auth/kinmaster',controller.kinMaster)
app.get('/api/auth/findkinmaster',controller.findkinMaster)
app.get('/api/auth/findonekinmaster/:id',controller.findOneKinMaster)
app.put('/api/auth/updatekinmaster/:id',controller.updateKinMaster)
app.delete('/api/auth/deletekinmaster/:id',  controller.deleteKin);

///////////////////////////////////////

//app.get('/api/findall/masters',controller.findobservations);


///////////////////////////////////////////// Master Tables

app.get('/api/auth/getmaster/:data',controller.getmaster)
app.post('/api/auth/createmaster/:data',controller.createmaster)
app.put('/api/auth/updatemaster/:id/:data',controller.updatemaster)
app.delete('/api/auth/deletemaster/:id/:data',controller.deletemaster)
app.get('/api/auth/findonemaster/:id/:data',controller.getonemaster)

//////////////////////////// OBSERVATIONS

app.post('/api/auth/obs', controller.obs);

/////////////////////////////////////////////////////////// 

//app.get('/api/auth/findbydate/:testdate/:status',controller.findByDate)
app.get('/api/auth/findbydate/:testdate/:status/:clinicId',controller.findByDate)

///////////////////////////////////

app.post('/api/auth/observation/:patientId/:type', controller.Observation);
app.get('/api/findOne/observation/:id',controller.getObservation)
app.get('/api/findOne/observation/:patientId/:type',controller.findObservation)
app.get('/api/findall/observations/:patientId',controller.findAllObservations);


///////////////////////////////

//app.post('/api/create/report/:patientId/:type',controller.report)
app.post('/api/update/observation/:patientId',controller.updateobs)
app.post('/api/update/report/:patientId',controller.updatereport)



}
