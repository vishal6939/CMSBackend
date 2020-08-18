const db = require('../../config/db');
const config = require('../../config/config');
const ROLEs = config.ROLEs; 
const ClinicManagement = db.clinic;
const Role = db.role;

// checkDuplicateUserName = (req, res, next) => {
// 	// -> Check Username is already in use
// 	ClinicManagement.findOne({
// 		where: {
// 			clinicName: req.clinic.clinicName
// 		} 
// 	}).then(clinic => {
// 		if(clinic){
// 			res.status(400).send("Fail -> Username is already taken!");
// 			return;
// 		}
		
// 		// -> Check Email is already in use
// 		// ClinicManagement.findOne({ 
// 		// 	where: {
// 		// 		email: req.body.email
// 		// 	} 
// 		// }).then(user => {
// 		// 	if(user){
// 		// 		res.status(400).send("Fail -> Email is already in use!");
// 		// 		return;
// 		// 	}
				
// 		// 	next();
// 		// });
// 	});
// }

checkRolesExisted = (req, res, next) => {	
	for(let i=0; i<req.body.roles.length; i++){
		if(!ROLEs.includes(req.body.roles[i].toUpperCase())){
			res.status(400).send("Fail -> Does NOT exist Role = " + req.body.roles[i]);
			return;
		}
	}
	next();
}

const signUpVerify = {};
// signUpVerify.checkDuplicateUserName = checkDuplicateUserName;
signUpVerify.checkRolesExisted = checkRolesExisted;

module.exports = signUpVerify;