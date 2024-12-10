const connections = require("../map");

const submitContoller = (req, res) => {
  try {
    const body = req.body;
    const key = body.id;
    const socketId = connections.get(key);
    console.log(key);
    console.log(socketId);
    if (socketId) {
      req.io.to(socketId).emit("response", body); // Access io from req
      return res
        .status(200)
        .json({ message: "Result emitted successfully to user" });
    }

    res.json({ message: "OK" });
  } catch (error) {
    res.json({
      succes: false,
      error: error,
    });
  }
};

module.exports = submitContoller;
