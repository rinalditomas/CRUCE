const express = require("express");


const app = express();
const db = require("./db");
const cors = require("cors");

const config = require("./server.config.js");
const routes = require('./routes')


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());



app.use("/api", routes);
 

db.sync({ force: false}).then(() => {
  app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}`);
  });
});