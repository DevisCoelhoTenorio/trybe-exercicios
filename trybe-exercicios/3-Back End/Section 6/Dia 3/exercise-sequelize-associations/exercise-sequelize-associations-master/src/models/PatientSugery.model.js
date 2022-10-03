module.exports = (sequelize, _DataTypes) => {
    const PatientSugery = sequelize.define('PatientSugery', {}, 
    {
        timestamps: false,
        underscored: true,
        tableName: 'Patient_surgeries',
    });
    
    PatientSugery.associate = (models) => {
        models.Patient.belongsToMany(models.Surgery, {
            as: 'surgeries',
            through: PatientSugery,
            foreignKey: 'patientId',
            otherKey: 'surgeryId',
        });

        models.Surgery.belongsToMany(models.Patient, {
            as: 'patients',
            through: PatientSugery,
            foreignKey: 'surgeryId',
            otherKey: 'patientId',
        });
    };
    return PatientSugery;
};