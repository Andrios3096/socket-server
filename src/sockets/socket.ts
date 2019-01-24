import { Socket } from "socket.io";
import SocketIO from "socket.io";



export const desconectar = (cliente: Socket) => {

  cliente.on("disconnect", () => {
    console.log("cliente desconectado");
  });

};

// escuchar evento sin rest
export const mensaje = (cliente: Socket, io:SocketIO.Server) => {

  cliente.on('mensaje', (payload) => {

    console.log("mensaje recibido", payload);
    
    // para poder enviar lo que recibio el servidor
    io.emit('mensaje',payload)

  });

};


