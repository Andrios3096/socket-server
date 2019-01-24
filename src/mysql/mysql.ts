//7
import mysql from "promise-mysql";
import config from "./config";

export default class Mysql {

    //8 atron singleton
    private static _instance: Mysql;
    //
    //7
    cnn: mysql.Pool;
    conectado: boolean = false

    constructor() {
        console.log('clase inicializada');
        this.cnn = mysql.createPool(config.database)

        this.conectarDB();

    }

    conectarDB() {

        this.cnn.getConnection()
            .then(connection => {
                this.cnn.releaseConnection(connection);
                console.log('DB is connected');
            }).catch(err => {
                console.log(err);

            })
    }

    //8
    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    //9
    static ejecutarQuery(query: string){
        
        return this.instance.cnn.query(query).then(rows => {
            // console.log(rows);
            return rows
          }).catch(error => {
            console.log(error);
          });

    }
}