const express = require('express');
const { PatientController } = require('./controllers');

const app = express();
app.use(express.json());

app.get('/patient/sugeries/nodoc', PatientController.getAllPatientSurgeryNoDoctor);
app.get('/patient/sugeries', PatientController.getAllPatientSurgery);
app.get('/patient/plan/:id', PatientController.getPatientsByPlanId);
app.get('/patient', PatientController.getAll);
app.get('/surgeries/:doctor', PatientController.getSugeriesByDoctor);

app.post('/patient', PatientController.insertPacient);

module.exports = app;