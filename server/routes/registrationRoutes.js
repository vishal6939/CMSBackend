 // var router = require('express').Router();
 const db = require('../config/db');
 const fs = require('fs');
 const multer = require('multer');
 const express = require('express');
 const { Router } = require('express');
 const UUID = require('uuid-generate')
 // const req['uniqueId'] = UUID.generate()
 var dicomParser = require('../../node_modules/dicom-parser/dist/dicomParser');
 const ClinicManagement = db.clinicManagement;
 const DoctorManagement = db.doctorManagement
 // Load in Rusha so we can calculate sha1 hashes
  var Rusha = require('../../node_modules/rusha/dist/rusha');
 
 
 const app = express()
 
 var storage = multer.diskStorage({
 
     destination: function(req, file, cb) {
         const name = req.body;
         if (file.fieldname === 'profileImage') {
       if(!fs.existsSync("./profileImages")) {
         fs.mkdir('./profileImages', {recursive:true}, (err)=>{
           if (err) {
               console.log("Parent directory issue") 
               return cb(null, false, new Error('Something Went wrong,please try again')); 
           }
         })
       }
       else {
         if(!fs.existsSync(`./profileImages/${req['uniqueId']}`)) { 
           fs.mkdir(`./profileImages/${req['uniqueId']}`, {recursive:true}, (err)=>{
             if (err) {
               console.log("Children directory issue")
               return cb(null, false, new Error('Something Went wrong,please try again')); 
             } 
           })
         }
         cb(null,`./profileImages/${req['uniqueId']}`);
         console.log(`./profileImages/${req['uniqueId']}`)
         module.exports = { folderName: `./profileImages/${req['uniqueId']}` };
 
     }
 }
 else if (file.fieldname === 'logoImage') {
     if(!fs.existsSync("./logoImages")) {
         fs.mkdir('./logoImages', {recursive:true}, (err)=>{
           if (err) {
               console.log("Parent directory issue") 
               return cb(null, false, new Error('Something Went wrong,please try again')); 
           }
         })
       }
       else {
         if(!fs.existsSync(`./logoImages/${req['uniqueId']}`)) {
           fs.mkdir(`./logoImages/${req['uniqueId']}`, {recursive:true}, (err)=>{
             if (err) {
               console.log("Children directory issue")
               return cb(null, false, new Error('Something Went wrong,please try again')); 
             } 
           })
         }
         cb(null,`./logoImages/${req['uniqueId']}`);
         console.log(`./logoImages/${req['uniqueId']}`)
         module.exports = { folderName: `./logoImages/${req['uniqueId']}` };
       }
 }
 },
     filename: function (req, file, cb) {
         console.log(Date.now())
         cb(null ,Date.now()+'.png')
     }
 });
   var Imagesupload = multer({ errorHandling: 'manual' , storage: storage })
 
    
    
   module.exports = function(app) {
     app.use(function (req, res, next) {
         req['uniqueId'] = UUID.generate()
        
         console.log(req['uniqueId'])
         console.log('asdddddd')
 
         console.log(req['uniqueId'])
 
   
         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
         res.setHeader('Access-Control-Allow-Methods', 'POST');
         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
         res.setHeader('Access-Control-Allow-Credentials', true);
         next();
       });
     
     var Upload = Imagesupload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'logoImage', maxCount: 1 }]);
     app.post('/api/auth/registration', Upload,async function  (req,res) {
         const{username,password,role} = req.body;
   
     if(role === 'CLINIC'){
         
     // console.log(folderName)	
         var usernameIsValid = await ClinicManagement.findOne({
             where:{
       username:req.body.username
             },
         });
         
    if (!usernameIsValid) {
    
    
     
      
      ClinicManagement.create({
      ...req.body,
        profileImagesId: `${req['uniqueId']} `,
       logoImagesId: `${req['uniqueId']} `,
 
     
         }).then(clinicManagement => {
             console.log(clinicManagement) 
         
             // exit node.js app
             res.json({'message': 'File uploaded successfully!', 'file': req.file,'user':req.body});
         })
     
 }
 else{
     return res.status(401).send({ auth: false, accessToken: null, message: "Username already exists!" ,status: 401});
 
 }
 }
     if(role === 'DOCTOR'){
         var usernameIsValid = await DoctorManagement.findOne({
             where:{
       username:req.body.username
             },
         });
         if (!usernameIsValid) {
     
         let totalCount = await DoctorManagement.findAndCountAll({
             where:{
       clinicId:req.body.clinicId
             },
             raw:true
         });
         console.log(totalCount.count)
     
         if(totalCount.count<3){
            
     
         const createDoctor= await DoctorManagement.create({
          ...req.body,
          profileImagesId: `${req['uniqueId']} `,
          logoImagesId: `${req['uniqueId']} `,
 
 
         }).then(doctorManagement => {
             
         // 	// exit node.js app
              res.json({'message': 'File uploaded successfully!','user':req.body,count:totalCount.count});
         
         })
     
     }
         }
     else{
         return res.status(401).send({ auth: false, accessToken: null, message: "Username already exists!" ,});
         // res.json({'message':'cannot enter',count:totalCount.count});
     }
 }
     })
 
 
 app.get('/api/profileImage/:folder', async function(req, res, next) {
     const folder = req.params.folder
        const path = require('path');
            var obj    = {};
            console.log(req.params.folder)
        var fileNames = [];
        const folders  = fs.readdirSync(`./profileImages/${folder}`);
    
            console.log(folders)
            fs.readdir(`./profileImages/${folder}`, function (err,files ) {
    
          files.forEach(function (err, file) {
    
            obj.files  = file;
             console.log(obj.files)
            name = `./profileImages/${folder}/${file}`;
            
            Promise.all(files).then(name => {
    
              name = `./profileImages/${folder}/${file}`;
                         console.log(`./profileImages/${folder}/${file}.png`) 
                          res.set('Content-Type');
               res.send({status:200,'message' :'file sent',path:[`./profileImages/${folder}/${file}.png`],path1:folders});
    
          }).catch(error => {
              res.status(400).json("name");
        });
    
            
    
        })
        
       })
    });
 
    
 }