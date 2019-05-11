var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table) {
        connection.query(`SELECT * FROM ${table};`);
        if (err) {
            throw err;
        }
    },
    insertOne: function (table, columns, values) {
        connection.query(`INSERT INTO ${table} (${columns}) VALUES (${values});`);
        if (err) {
            throw err;
        }
    },
    updateOne: function (table, column, value, id) {
        connection.query(`UPDATE ${table} SET ${column} = ${value} WHERE id = ${id};`);
        if (err) {
            throw err;
        }
    }
};

module.exports = orm;