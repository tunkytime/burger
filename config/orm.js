var connection = require("../config/connection.js");

module.exports = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??"

        connection.query(queryString, [table],
            function (err, data) {
                if (err) {
                    throw err;
                }
                cb(data);
            })
    },
    insertOne: function (table, col, cl, cb) {

        var queryString = "INSERT INTO ?? (??) VALUES (?)"

        connection.query(queryString, [table, col, cl.burger_name], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        })
    },
    updateOne: function (table, id, cb) {
        var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?;"
        connection.query(queryString, [table, id], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        })
    }
}