module.exports = (sequelize, DataTypes) => {
	const LoginLookUp = sequelize.define('loginLookUp', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
	  username: {
		  type: DataTypes.STRING
	  },
	  
	  password: {
		  type: DataTypes.STRING
	  },
	 
	role: {
        type: DataTypes.ENUM,
        values:['CLINIC','DOCTOR','ADMIN']
	},
	});
	
	return LoginLookUp;
}