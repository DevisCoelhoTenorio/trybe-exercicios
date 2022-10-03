const express = require('express');
const { User } = require('./controllers');

const router = express.Router();

router.use(express.json());

router.get('/', User.getAll);

router.get('/:id', User.getById);

router.get('/search/:id', User.getByIdAndEmail);

router.post('/', User.createUser);

router.put('/:id', User.updateUser);

router.delete('/:id', User.deleteUser);

module.exports = router;