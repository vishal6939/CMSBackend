'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.clinicManagement = require('../models/clinicManagement.js')(sequelize, Sequelize);
db.doctorManagement = require('../models/doctorManagement.js')(sequelize, Sequelize);
db.doctorAssignment = require('../models/doctorAssignment.js')(sequelize, Sequelize);
db.assignmentStatus = require('../models/assignmentStatus.js')(sequelize, Sequelize);
db.loginLookUp=require('../models/loginLookUp.model.js')(sequelize, Sequelize);
db.admin=require('../models/admin.model.js')(sequelize, Sequelize);

db.anteriorSeptum=require('../models/anteriorSeptum.js')(sequelize, Sequelize);
db.anteriorWall=require('../models/anteriorWall.js')(sequelize, Sequelize);
db.aorta=require('../models/aorta.js')(sequelize, Sequelize);
db.aorticValve=require('../models/aorticValve.js')(sequelize, Sequelize);
db.conclusion=require('../models/conclusion.js')(sequelize, Sequelize);
db.doctorAdvice=require('../models/doctorAdvice.js')(sequelize, Sequelize);
db.inferiorSeptum=require('../models/inferiorSeptum.js')(sequelize, Sequelize);
db.inferiorVenaCava=require('../models/inferiorVenaCava.js')(sequelize, Sequelize);
db.inferiorWall=require('../models/inferiorWall.js')(sequelize, Sequelize);
db.intracardiacData=require('../models/intracardiacData.js')(sequelize, Sequelize);
db.intraCardiacTumour=require('../models/intraCardiacTumour.js')(sequelize, Sequelize);
db.lateralWall=require('../models/lateralWall.js')(sequelize, Sequelize);
db.leftAtrium=require('../models/leftAtrium.js')(sequelize, Sequelize);
db.leftVentrical=require('../models/leftVentrical.js')(sequelize, Sequelize);
db.leftVentricalFunction=require('../models/leftVentricalFunction.js')(sequelize, Sequelize);
db.mitralValve=require('../models/mitralValve.js')(sequelize, Sequelize);
db.pericardialEffusion=require('../models/pericardialEffusion.js')(sequelize, Sequelize)
db.pericardium=require('../models/pericardium.js')(sequelize, Sequelize);
db.posteriorWall=require('../models/posteriorWall.js')(sequelize, Sequelize);
db.pulmonaryArtery=require('../models/pulmonaryArtery.js')(sequelize, Sequelize);
db.pulmonaryVein=require('../models/pulmonaryVein.js')(sequelize, Sequelize);
db.pulmonicValve=require('../models/pulmonicValve.js')(sequelize, Sequelize);
db.rightAtrium=require('../models/rightAtrium.js')(sequelize, Sequelize);
db.rightVentricalFunction=require('../models/rightVentricalFunction.js')(sequelize, Sequelize);
db.rightVentricle=require('../models/rightVentricle.js')(sequelize, Sequelize);
db.tricuspidValve=require('../models/tricuspidValve.js')(sequelize, Sequelize);
db.venous=require('../models/venous.js')(sequelize, Sequelize);


db.educationalMaster=require('../models/educationalMaster')(sequelize, Sequelize);
db.salutationMaster=require('../models/salutationMaster')(sequelize, Sequelize);
db.hospitalSpeciality=require('../models/hospitalSpeciality')(sequelize, Sequelize);
db.hospitalType=require('../models/hospitalType')(sequelize, Sequelize);
db.religionMaster=require('../models/religionMaster')(sequelize, Sequelize);
db.occupationMaster=require('../models/occupationMaster')(sequelize, Sequelize);
db.diagnosisMaster=require('../models/diagnosisMaster')(sequelize, Sequelize);
db.complaintsMaster=require('../models/complaintsMaster')(sequelize, Sequelize);
db.branchMaster=require('../models/branchMaster')(sequelize, Sequelize);
db.martialStatus=require('../models/maritalStatus')(sequelize, Sequelize);

db.patientMaster=require('../models/patientMaster')(sequelize, Sequelize);
db.kinMaster = require('../models/kinmaster')(sequelize, Sequelize);

db.patientmodel=require('../models/patientmodel')(sequelize, Sequelize);

db.observations=require('../models/observations')(sequelize, Sequelize);


db.anteriorSeptumObservation=require('../models/anteriorSeptumObservation')(sequelize, Sequelize);
db.anteriorWallObservation=require('../models/anteriorWallObservation')(sequelize, Sequelize);
db.aortaObservation=require('../models/aortaObservation')(sequelize, Sequelize);
db.aorticValveObservation=require('../models/aorticValveObservation')(sequelize, Sequelize);
db.conclusionObservation=require('../models/conclusionObservation')(sequelize, Sequelize);
db.doctorAdviceObservation=require('../models/doctorAdviceObservation')(sequelize, Sequelize);
db.inferiorSeptumObservation=require('../models/inferiorSeptumObservation')(sequelize, Sequelize);
db.inferiorVenaCavaObservation=require('../models/inferiorVenaCavaObservation')(sequelize, Sequelize);
db.inferiorWallObservation=require('../models/inferiorWallObservation')(sequelize, Sequelize);
db.intracardiacDataObservation=require('../models/intracardiacDataObservation')(sequelize, Sequelize);
db.intraCardiacTumourObservation=require('../models/intraCardiacTumourObservation')(sequelize, Sequelize);
db.lateralWallObservation=require('../models/lateralWallObservation')(sequelize, Sequelize);
db.leftAtriumObservation=require('../models/leftAtriumObservation')(sequelize, Sequelize);
db.leftVentricalObservation=require('../models/leftVentricalObservation')(sequelize, Sequelize);
db.leftVentricalFunctionObservation=require('../models/leftVentricalFunctionObservation')(sequelize, Sequelize);
db.mitralValveObservation=require('../models/mitralValveObservation')(sequelize, Sequelize);
db.pericardialEffusionObservation=require('../models/pericardialEffusionObservation')(sequelize, Sequelize)
db.pericardiumObservation=require('../models/pericardiumObservation')(sequelize, Sequelize);
db.posteriorWallObservation=require('../models/posteriorWallObservation')(sequelize, Sequelize);
db.pulmonaryArteryObservation=require('../models/pulmonaryArteryObservation')(sequelize, Sequelize);
db.pulmonaryVeinObservation=require('../models/pulmonaryVeinObservation')(sequelize, Sequelize);
db.pulmonicValveObservation=require('../models/pulmonicValveObservation')(sequelize, Sequelize);
db.rightAtriumObservation=require('../models/rightAtriumObservation')(sequelize, Sequelize);
db.rightVentricalFunctionObservation=require('../models/rightVentricalFunctionObservation')(sequelize, Sequelize);
db.rightVentricleObservation=require('../models/rightVentricleObservation')(sequelize, Sequelize);
db.tricuspidValveObservation=require('../models/tricuspidValveObservation')(sequelize, Sequelize);
db.venousObservationObservation=require('../models/venousobservation')(sequelize, Sequelize);



// db.doctorManagement.belongsTo(db.clinicManagement,{through:'doctorManagement',foreignKey:'clinicId',otherKey:'id'});
db.doctorAssignment.belongsTo(db.doctorManagement);
db.doctorAssignment.belongsTo(db.clinicManagement);
//db.assignmentStatus.belongsTo(db.doctorManagement,{through:'doctorManagement',foreignKey:'doccId',otherKey:'id'});
 //db.assignmentStatus.belongsTo(db.clinicManagement,{through:'clinicManagement',foreignKey:'clinicId',otherKey:'id'});

 
// db.loginLookUp.belongsToMany(db.clinicManagement, { through: 'loginLookUp', foreignKey: 'loginLookUpId', otherKey: 'clinicId'});
// db.clinicManagement.belongsToMany(db.loginLookUp);

module.exports = db;