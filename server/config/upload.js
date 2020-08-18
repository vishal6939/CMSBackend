const multer = require('multer');
var fs = require('fs');
var dir = './tmp';

 
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/main-directory/1/sai/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});
 
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(req.params.username)
//       var newDestination = `main-directory/ + ${req.params.id}`;
//       var stat = null;
//       // try {
//       //     stat = fs.statSync(newDestination);
//       // } catch (err) {
//           fs.mkdirSync(newDestination);
//       // }
//       // if (stat && !stat.isDirectory()) {
//       //     throw new Error('Directory cannot be created because an inode of a different type exists at "' + dest + '"');
//       // }       
//       cb(null, newDestination);
//   }
// });
 
var upload = multer({storage: storage});
 
module.exports = upload;
