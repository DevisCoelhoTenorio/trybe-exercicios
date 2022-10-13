
module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define('Plan', {
        planId: {type: DataTypes.INTEGER, primaryKey: true },
        coverage: DataTypes.STRING,
        price: DataTypes.DOUBLE
    },{
        timestamps: false,
        underscored: true,
        tableName: 'Plans',
    });
    Plan.associate = (models) => {
        Plan.hasMany(models.Patient, {
            as: 'patients',
            foreignKey: 'planId',
        });
    };
    return Plan;
};