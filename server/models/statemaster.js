module.exports = (sequelize, DataTypes) => {
	const state = sequelize.define('state', {
        key: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          value: {
            type: DataTypes.STRING,
           required: true
            },
            countryId: {
                type: DataTypes.INTEGER,
               required: true
                },    
	
	});
	
	return state;
}