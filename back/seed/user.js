const { emailAdmin, passwordAdmin, saltAdmin } = require("../server.config");

module.exports = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "12345678",
    phoneNum: "1234567899",
    admin: true,
    vehicle: "auto",
  },

  {
    firstName: "Laura",
    lastName: "Gonzalez",
    email: "lauras@gmail.com",
    password: "12345678",
    phoneNum: "29837456789",
    vehicle: "moto",
  },
  {
    firstName: "Roberto",
    lastName: "Giovanni",
    email: "robertos@gmail.com",
    password: "12345678",
    phoneNum: "29837456789",
    vehicle: "moto",
  },
  {
    firstName: "Jose",
    lastName: "Lopez",
    email: "joses@gmail.com",
    password: "12345678",
    phoneNum: "29837456789",
    vehicle: "moto",
  },
];
