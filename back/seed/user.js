const { emailAdmin, passwordAdmin, saltAdmin } = require("../server.config");

module.exports = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    phoneNum: "1234567899",
    password: "123",
    admin: true,
    vehicle: "auto",
    authorized: true,
    active: true,
  },
  {
    firstName: "Laura",
    lastName: "Gonzalez",
    email: "laura@gmail.com",
    password: "1234",
    phoneNum: "2954745678",
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
    phoneNum: "2183745678",
    vehicle: "moto",
  },
];
