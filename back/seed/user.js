const { emailAdmin, passwordAdmin, saltAdmin } = require("../server.config");

module.exports = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "9cb69e7d3b1fbb2c56b0c388b1cecca3470210a8",
    phoneNum: "123456789",
    salt: "e4ea2395e8c4f012545e795efb74dae1ef224ec4",
    admin: true,
    vehicle: "auto",
  },

  {
    firstName: "Laura",
    lastName: "Gonzalez",
    email: "laura@gmail.com",
    password: "1234",
    phoneNum: "2983745678",
    vehicle: "moto",
  },
  {
    firstName: "Roberto",
    lastName: "Giovanni",
    email: "roberto@gmail.com",
    password: "12345678",
    phoneNum: "2983745678",
    vehicle: "moto",
  },
  {
    firstName: "Jose",
    lastName: "Lopez",
    email: "jose@gmail.com",
    password: "12345678",
    phoneNum: "2983745678",
    vehicle: "moto",
  },
];
