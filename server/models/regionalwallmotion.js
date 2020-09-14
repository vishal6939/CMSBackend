module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const RegionalWallMotion= sequelize.define('regionalwallmotion', { 
        anteriorwall: {
            type: DataTypes.JSON,
         required: true,
          },
          posteriorwall: {
            type: DataTypes.JSON,
           required: true
            },    
            inferiorwall: {
              type: DataTypes.JSON,
             required: true
              },    
              lateralwall: {
                  type: DataTypes.JSON,
                 required: true
                  },
           pulmonaryarterypressure: {
                      type: DataTypes.INTEGER,
                     required: true
                      },      
          valueofef: {
                   type: DataTypes.INTEGER,
                  required: true
                   },    
           avgsystolicstrain: {
                type: DataTypes.STRING,
              required: true
                      }, 
           peaksystolicstrain: {
               type: DataTypes.JSON,
               required: true
                   },
                   patientId:{
                    type:DataTypes.INTEGER,
                    required:true
                    }
                            });
                        return RegionalWallMotion;
                      };