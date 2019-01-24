//4
import { Request, Response } from "express";
//

import Server from "../server/server";

import Mysql from "../mysql/mysql";

//9
export default class HeroesControllers {


  // obtener todos los heroes
    public async todosHeroes (req: Request, res: Response) {

        const query = ` SELECT * FROM heroe`;

          let heroelist = await Mysql.ejecutarQuery(query)
          
          const payload = heroelist

            res.json({
                heroe: heroelist
              });

              const server = Server.instance
              server.io.emit('heroes', payload)

      }
// obetner un heroe
    public unHeroe (req: Request, res: Response) {

        const id = req.params.id;
        const escapedId = Mysql.instance.cnn.escape(id)

        const query = ` SELECT * FROM heroe where id = ${escapedId}`;
      
        Mysql.ejecutarQuery(query).then( heroe =>{
            res.json({
                heroe: heroe
              });
        })
      }

// crear heroe
      public async createHeroe (req: Request, res: Response) {

        const nombre = req.body.nombre;
        const poder = req.body.poder
    

      const query = `INSERT INTO heroe (nombre, poder) values ('${nombre}', '${poder}')`;
//
      await Mysql.ejecutarQuery(query)

      const query2 = ` SELECT * FROM heroe`;

      let payload = await Mysql.ejecutarQuery(query2)



            res.json({
                nombre,
                poder
              });

              const server = Server.instance
              server.io.emit('heroes', payload)

      }
}

export const heroesControllers = new HeroesControllers();

