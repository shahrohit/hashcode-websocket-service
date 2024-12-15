import { Request as Req, Response as Res } from "express";
import connections from "@config/map";
import { RUN } from "@/utils/events";

const runContoller = (req: Req, res: Res) => {
  try {
    const body = req.body;
    const key = body.id;
    const socketId = connections.get(key);

    if (socketId && req.io) {
      req.io.to(socketId).emit(RUN, body); // Access io from req
      res.status(200).json({ message: "Result emitted successfully to user" });
      return;
    }

    res.json({ message: "OK" });
  } catch (error) {
    res.json({
      succes: false,
      error: error,
    });
  }
};

export default runContoller;
