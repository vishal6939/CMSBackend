module.exports = (sequelize, DataTypes) => {
	const referralcomment = sequelize.define('referralcomment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          comment: {
            type: DataTypes.STRING,
           required: true
            },
            patientId: {
                type: DataTypes.INTEGER,
               required: true
                },	
	});
	
	return referralcomment;
}