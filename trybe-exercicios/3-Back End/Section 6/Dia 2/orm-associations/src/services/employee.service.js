// src/services/employee.service.js
const Sequelize = require('sequelize');
const config = require('../config/config');
const { Address, Employee } = require('../models/');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    // include: [{
    //   model: Address, as: 'addresses',
    //   attributes: { exclude: ['number']}
    // }],
  });
  return employee;
};

//Unmanaged transactions type
const insert = async ({firsName, lastName, age, city, street, number}) => {
  const t = await sequelize.tansaction();
  try {
    const employee = await Employee.create(
      {firsName, lastName, age},
      {transaction: t},
    );
    await Address.create(
      {city, street, number, employeeId: employee.id},
      {transaction: t},
    );

    await t.commit();
    return employee;
  } catch (error) {
    await t.rollback(error);
    throw error;
  }
}





module.exports = { getAll, getById, insert };