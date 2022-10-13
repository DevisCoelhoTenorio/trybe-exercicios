const conn = require('./connection');

const insert = (transaction, personId) => {
    return conn.execute(`INSERT INTO  transactions (name, description, price, type, person_id)
    VALUES (?,?,?,?,?)`,
    [
        transaction.name,
        transaction.description,
        transaction.price,
        transaction.type,
        personId
    ]
    )
}

module.exports = {
    insert
}