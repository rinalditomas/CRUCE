const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/cruce", {
  logging: false,
});

module.exports = db;