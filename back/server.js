const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const db = require("./db");
const cors = require("cors");
const config = require("./server.config.js");
const routes = require("./routes");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

io.on("connection", (socket) => {
  console.log("Io conectado");

  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });

  socket.on("orders", (ordenes) => {
    io.emit("orders", ordenes);
  });


});

const startServer = async () => {
  await db.sync({ force: false });
  httpServer.listen(config.port, () =>
    console.log(`Server listening at port ${config.port}`)
  );
};

startServer();
