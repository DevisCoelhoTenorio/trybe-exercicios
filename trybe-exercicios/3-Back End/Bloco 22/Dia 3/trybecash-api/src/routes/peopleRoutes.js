const express = require('express');
const peopleDB = require('../db/peopleDB');
const transactionDB = require('../db/transactionsDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;

  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }

});

router.post('/:personId/transactions', async (req, res) => {
    const { personalId } = req.params;
    const transaction = req.body;

    try {
        const [ result ] = await transactionDB.insert(transaction, personalId);
        res.status(201).json({menssage: `Transação add com sucesso com o id ${result.insertId}`});
    } catch (e) {
        res.status(500).json({message: `Ocorreu um erro: ${e.message}`})
    }
})

module.exports = router;