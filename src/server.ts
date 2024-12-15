import express from "express";
import http from "http";
import bodyParser from "body-parser";
import { Server } from "socket.io";

import apiRouter from "@routes/index";
import { PORT } from "./config/server-config";
import socketConfig from "./config/socket-config";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

declare global {
  namespace Express {
    interface Request {
      io?: Server;
    }
  }
}

app.use(bodyParser.json());
app.use((req, _, next) => {
  req.io = io;
  next();
});

app.use("/api", apiRouter);

io.on("connection", socketConfig);

server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});
