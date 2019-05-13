var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, err) {
        connection.query(`SELECT * FROM ${table};`);
        if (err) {
            throw err;
        }
    },
    insertOne: function (table, columns, values, err) {
        connection.query(`INSERT INTO ${table} (${columns}) VALUES (${values});`);
        if (err) {
            throw err;
        }
    },
    updateOne: function (table, column, value, id, err) {
        connection.query(`UPDATE ${table} SET ${column} = ${value} WHERE id = ${id};`);
        if (err) {
            throw err;
        }
    }
};

module.exports = orm;