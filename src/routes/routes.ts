
import { Router, Request, Response } from "express";
import Mysql from "../mysql/mysql";
import Server from "../server/server";

//9
import {heroesControllers} from "../controllers/heroesControllers";



//4
export const router = Router();

//4
router.get("/heroes", heroesControllers.todosHeroes);

router.post("/", heroesControllers.createHeroe);

//5 parametros
router.post("/heroe/:id", heroesControllers.unHeroe)

//
