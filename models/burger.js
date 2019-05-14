var orm = require("../config/orm.js");

module.exports = {
    getAllBurgers: function (cb) {
        orm.selectAll("burgers", cb)
    },
    addBurger: function (cl, cb) {
        orm.insertOne("burgers", "burger_name", cl, cb)
    },
    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, cb)
    },
    deleteRow: function (id, cb) {
        orm.deleteRow("burgers", id, cb)
    }
}