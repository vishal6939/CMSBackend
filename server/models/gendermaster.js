module.exports = (sequelize, DataTypes) => {
	const Gender = sequelize.define('gender', {
        key: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          value: {
            type: DataTypes.STRING,
           required: true
            },  
	
	});
	
	return Gender;
}