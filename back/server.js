const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const volleyball = require("volleyball");
const cors = require("cors");
const db = require("./db");
const PORT = process.env.PORT;

/* const routes = require('./routes') */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/* app.use("/api", routes);
 */

db.sync({ force: false })
  .then((connection) => {
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
  })
  .catch((err) => {
    console.log("DB sync failed", err);
  });