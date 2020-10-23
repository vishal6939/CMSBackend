module.exports = (sequelize, DataTypes) => {
	const country = sequelize.define('country', {
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
	
	return country;
}