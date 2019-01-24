//1 instalar @types/expres -D
import express from 'express'
import { SERVER_PORT } from '../global/environment';
//

//10 @types/socket.io
import socketIO from "socket.io";
import http from "http";

//sockets
import * as socket from "../sockets/socket";


//1
export default class Server {

    private static _instance: Server;

    //1
    public app: express.Application;
    public port: number;
    //

    //10
    public io: socketIO.Server
    private httpServer: http.Server

    //1 constructor
    private constructor() {

        this.app = express();

    //2
        this.port = SERVER_PORT;
    //

    //10
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
    //11
        this.escucharSockets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    //11 metodos del socket
    private escucharSockets() {



        console.log('escuchando sockets');

        this.io.on('connection', cliente => {


            console.log('cliente conectado');

            // recibir un evneto sin rest
            socket.mensaje(cliente, this.io)

            // sockets desconectar
            socket.desconectar(cliente);

        })


    }

    //3
    start(callback: Function) {

        // this.app.listen(this.port, callback);
        //10
        this.httpServer.listen(this.port, callback);
    }
    //
}

