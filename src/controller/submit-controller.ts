import { SUBMIT } from "@/utils/events";
import connections from "@config/map";
import { Request, Response } from "express";

const submitContoller = (req: Request, res: Response) => {
  try {
    const body = req.body;
    const key = body.id;
    const socketId = connections.get(key);
    if (socketId && req.io) {
      req.io.to(socketId).emit(SUBMIT, body); // Access io from req
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

export default submitContoller;
