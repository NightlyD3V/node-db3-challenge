const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes').where({ id }).first();
};

function findSteps(id) {
    return db('steps as s')
    .join('schemes as sc', 'sc.id', 's.scheme_id')
    .select('s.id', 's.step_number', 'sc.scheme_name','s.instructions')
    .where({ id });
};

function add(scheme) {
    return db('schemes').insert(schemeData)
    .then((ids) => {
        return findById(ids[0]);
    });
};

function update(changes, id) {
    return db('schemes').where({ id }).update(changes)
    .then((count) => {
        return findById(id);
    })
};

function remove(id) {
    return db('Schemes').where({ id }).del()
};