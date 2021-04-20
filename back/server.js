const express = require("express");
const cors = require("cors");
const app = express();
const httpServer = require("http").createServer(app);
const db = require("./db");
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
  let nombre;

  socket.on("conectado", (nomb) => {
    nombre = nomb;
    console.log(`SE CONECTO ${nombre}`);
  });
  socket.on("ordenes", (ordenes) => {
    socket.broadcast.emit("ordenes", {
      mensaje: `El administrador cargó nuevas ordenes`,
      ordenes: ordenes,
    });
  });

  socket.on("orden", (orden) => {
    socket.broadcast.emit("orden", {
      nombre: nombre,
    });
    socket.emit("orden", {
      nombre: nombre,
    });
  });

  socket.on("disconnect", () => {
    console.log("DESCONECTADO");
    io.emit("mensajes", {
      servidor: "servidor",
      mensaje: `${nombre} ha abandonado la sala`,
    });
  });
});

const startServer = async () => {
  await db.sync({ force: false });
  httpServer.listen(config.port, () =>
    console.log(`Server listening at port ${config.port}`)
  );
};

startServer();
