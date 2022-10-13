const express = require('express');

const app = express();

const activities = require('./data/activities');

app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;
    const activity = activities.find((curr) => curr.id === Number(id));

    if(!activity) {
        res.status(404).json({message: 'Atividade não encontrada'}) 
    }

    res.status(200).json(activity)
});

app.get('./myActivites', (_req, res) => {
    res.status(200).json(activities)
});

const filterActivitiesByStatus = (req, res) => {
    const { status } = req.params;
    const filtered = activities.filter((curr) => curr.status === status);

    if(!filtered) {
        res.status(404).json({message: 'Atividades por status não encotradas'})
    }
    res.status(200).json(filtered);
}

app.get('/filter/myActivities', filterActivitiesByStatus)

module.exports = app;