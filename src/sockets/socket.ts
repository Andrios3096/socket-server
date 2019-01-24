import { Socket } from "socket.io";
import SocketIO from "socket.io";

export const desconectar = (cliente: Socket) => {

  cliente.on("disconnect", () => {
    console.log("cliente desconectado");
  });

};

// escuchar evento
export const mensaje = (cliente: Socket,
  io:SocketIO.Server
  ) => {

  cliente.on('mensaje', (payload: {de: string, cuerpo: string}) => {

    console.log("mensaje recibido", payload);
    
    io.emit('heroes',payload)

  });

};
