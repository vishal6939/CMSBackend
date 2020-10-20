'use strict'

const { truncate } = require('fs');

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const patient = sequelize.define('patient', {
    // id: {
    //     type: DataTypes.UUID,
    //     primaryKey: true,
    //     defaultValue: DataTypes.UUID,
    //     allowNull: false
    //   },
      patientname: { 
      type: DataTypes.STRING,
      required: true
    },
requirement:{
    type: DataTypes.STRING,
    required:true
},
dicomImagesId:{
    type: DataTypes.STRING,
    required:true
},
reportbase:{
    type: DataTypes.STRING,
    required:truncate
},
age:{
    type:DataTypes.STRING,
    required: true
},
height:{
    type:DataTypes.INTEGER,
    required:true
},
gender:{
    type:DataTypes.STRING,
    required:true
},
weight:{
    type:DataTypes.INTEGER,
    required:true,
},
dob:{
type:DataTypes.DATEONLY,
    required:true
},
caseId:{
    type:DataTypes.STRING,
    required:true
},
window:{
    type:DataTypes.STRING,
    required:true
},
testtype:{
    type:DataTypes.STRING,
    required:true
},
testdate:{
    type:DataTypes.DATEONLY,
    required:true
},
updatedate:{
    type:DataTypes.DATEONLY,
    required:true
},
examinedate:{
    type:DataTypes.DATEONLY,
    required:true
},
reportnew:{
    type:DataTypes.STRING,
    required:true
},
reportdate:{
    type:DataTypes.DATEONLY,
    required:true
},
supplimentaryreport:{
    type:DataTypes.STRING,
    required:true

},
supplimentarytdate:{
    type:DataTypes.DATEONLY,
    required:true
},
status:{
    type:DataTypes.STRING,
    required:true
},
propreport:{
    type:DataTypes.DATEONLY,
    required:true
},
submitdate:{
    type:DataTypes.DATEONLY,
    required:true
},
clinicId:{
    type:DataTypes.INTEGER,
    required:true
},
docId:{
    type:DataTypes.INTEGER,
    required:true
},
bsa:{
    type:DataTypes.STRING,
    required:true
},
    bmi:{
        type:DataTypes.STRING,
    required:true
    },
    bp:{
        type:DataTypes.STRING,
    required:true
    },
    bpsystolic:{
        type:DataTypes.STRING,
    required:true
    },
    bpdiastolic:{
        type:DataTypes.STRING,
    required:true
    },
    reason:{
        type:DataTypes.STRING,
    required:true
    },
    sendreport:{
        type:DataTypes.STRING,
        required:true
    },
    diagnostic:{
        type:DataTypes.STRING,
        required:true
    },
    ef:{
        type:DataTypes.STRING,
        required:true
    },
    protocol:{
        type:DataTypes.STRING,
        required:true
    },
    bmitype:{
        type:DataTypes.STRING,
        required:true
    },
    ew:{
        type:DataTypes.STRING,
        required:true
    },
    echoid:{
        type:DataTypes.STRING,
        required:true
    },
    hospitalName:{
        type:DataTypes.STRING,
        required:true
    },
mobileno:{
    type:DataTypes.STRING,
    required:true
},
type: { 
    type: DataTypes.STRING,
    required: true
  },
  status:{
    type: DataTypes.STRING
},
tapse:{
    type: DataTypes.STRING
},
mapse:{
    type: DataTypes.STRING
},
length:{
    type: DataTypes.INTEGER
}
//   name: {
//     type: DataTypes.STRING,
//     required: true
//   },
//   data: {
//     type: DataTypes.BLOB('long'),
//     required: true
   },
{
    underscored: true

  });
  return patient;
};