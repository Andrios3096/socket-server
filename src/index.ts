//0
import Server from "./server/server";
import express from 'express'
//

//4
import { router } from "./routes/routes";
//

//6
import cors from "cors";
//

//8
// import Mysql from "./mysql/mysql";

//3
const server = Server.instance;

//5 para tomar valores de un formulario html
server.app.use(express.urlencoded({ extended: true }))
//5 para transformar los valores en un json
server.app.use(express.json())
//

//6 cors importar @style/cors
server.app.use(cors({ origin: true, credentials: true }))
//
//4 rutas
server.app.use('/', router)
//

//8
// Mysql.instance;
//

//3
server.start(() => {

    console.log(`Servidor corriendo en el puerto ${server.port}`);

})
//


