module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        patientId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        fullname: DataTypes.STRING,
        planId: { 
            type: DataTypes.INTEGER,
            references: {
                model: 'Plans',
                key: 'planId',
            },
        },
    },{
        timestamps: false,
        underscored: true,
        tableName: 'Patients',
    });
    Patient.associate = (models) => {
        Patient.belongsTo(models.Plan, {
            as: 'plan',
            foreignKey: 'planId',
        });
    };
    return Patient;
};
