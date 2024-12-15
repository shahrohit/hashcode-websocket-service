import { Socket } from "socket.io";

import { disconnectWS, registerWS } from "@/utils/socket-fn";
import { DISCONNECT, REGISTER } from "@/utils/events";

const socketConfig = (socket: Socket) => {
  socket.on(REGISTER, id => registerWS(socket, id));
  socket.on(DISCONNECT, () => disconnectWS(socket));
};

export default socketConfig;
