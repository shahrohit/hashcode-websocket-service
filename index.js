const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");
const connections = require("./map");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (adjust for security in production)
    methods: ["GET", "POST"],
  },
});

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.io = io; // Attach the io instance to the req object
  next();
});

app.use("/api", apiRouter);

// Map to store connections

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Event to register user and problem
  socket.on("register", (id) => {
    console.log("first");
    const key = id;
    connections.set(key, socket.id);
    console.log(`Registered: ${key}`);
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    for (const [key, value] of connections) {
      if (value === socket.id) {
        connections.delete(key);
        console.log(`Removed connection for: ${key}`);
      }
    }
  });
});

server.listen(8085, () => {
  console.log("WebSocket server is running on port 8085");
});
