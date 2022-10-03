const { Patient, Plan, Surgery } = require('../models');

const getAll = async () => {
    const patients = await Patient.findAll({
         include: [{ model: Plan, as: 'plan' }],
        // include: [{ model: Plan, as: 'plan', attributes: { exclude: ['planId'] } }],
        attributes: { exclude: ['planId'] },
    });

    return patients;
};

const getAllPatientSurgery = async () => {
    const patients = await Patient.findAll({
        // attributes: [] || {},
        include: [{ model: Surgery, as: 'surgeries', through: { attributes: [] } }],
    });

    return patients;
};

const getPatientsByPlanId = async (planId) => {
    const planPacients = await Plan.findByPk(planId, {
        include: [{ model: Patient, as: 'patients' }],
        attributes: { exclude: 'planId' },
    });
    // const plan = await Plan.findAll({
    //     where: { planId },
    //     attributes: { exclude: 'planId' },
    //     include: [{ model: Patient, as: 'patients' }],
    // });

    // const patients = await Patient.findAll({
    //     where: { planId },
    //     include: [{ model: Plan, as: 'plan', attributes: [] }],
    //     attributes: { exclude: ['planId'] },
    // });

    return planPacients;
};

const insertPacient = async (pacient) => {
   const newPatient = await Patient.create(pacient);
   return newPatient;
};

const getAllPatientSurgeryNoDoctor = async () => {
    const patients = await Patient.findAll({
    include: [
        { model: Surgery,
        as: 'surgeries',
        attributes: { exclude: 'doctor' },
        through: { attributes: [] } }],
    });

    return patients;
};

const getSugeriesByDoctor = async (doctor) => {
    const sugeries = await Surgery.findAll({
        where: { doctor },
        // attributes: { exclude: 'doctor' },
        include: [{ model: Patient, as: 'patients', through: { attributes: [] } }],
    });
    return sugeries;
};

module.exports = {
    getAll,
    getAllPatientSurgery,
    getPatientsByPlanId,
    insertPacient,
    getAllPatientSurgeryNoDoctor,
    getSugeriesByDoctor,
};