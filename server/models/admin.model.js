module.exports = (sequelize, DataTypes) => {
	const Admin = sequelize.define('admin', {
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
	  email: {
        type: DataTypes.STRING
    },
   
	role: {
        type: DataTypes.STRING,
        required: true
      },
	});
	
	return Admin;
}