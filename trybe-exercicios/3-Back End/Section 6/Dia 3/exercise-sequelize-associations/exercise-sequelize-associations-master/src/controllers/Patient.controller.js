const { PatientService } = require('../services');

const getAll = async (_req, res) => {
    try {
        const patients = await PatientService.getAll();
        return res.status(200).json(patients);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const getAllPatientSurgery = async (_req, res) => {
    try {
        const patients = await PatientService.getAllPatientSurgery();
        return res.status(200).json(patients);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const getPatientsByPlanId = async (req, res) => {
    try {
        const { id } = req.params;
        const patients = await PatientService.getPatientsByPlanId(id);
        return res.status(200).json(patients);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const insertPacient = async (req, res) => {
    try {
        const newPatient = await PatientService.insertPacient(req.body);
        return res.status(200).json(newPatient);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const getAllPatientSurgeryNoDoctor = async (_req, res) => {
    try {
        const patients = await PatientService.getAllPatientSurgeryNoDoctor();
        return res.status(200).json(patients);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const getSugeriesByDoctor = async (req, res) => {
    try {
        const { doctor } = req.params; 
        const patients = await PatientService.getSugeriesByDoctor(doctor);
        return res.status(200).json(patients);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAll,
    getAllPatientSurgery,
    getPatientsByPlanId,
    insertPacient,
    getAllPatientSurgeryNoDoctor,
    getSugeriesByDoctor,
};