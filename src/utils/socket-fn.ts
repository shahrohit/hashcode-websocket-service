import connections from "@/config/map";
import { Socket } from "socket.io";

export const registerWS = (socket: Socket, id: unknown) => {
  if (typeof id === "string") {
    connections.set(id, socket.id);
  }
};

export const disconnectWS = (socket: Socket) => {
  for (const [key, value] of connections) {
    if (value === socket.id) {
      connections.delete(key);
    }
  }
};
