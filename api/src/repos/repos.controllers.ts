import express, { Request, Response } from "express";
import data from "../../data.json"
import type { Repos } from "../repos/repos.types"

const repos = express.Router();

/** 
 * Je suis sur la route /api/repos
 * On récupère tous les repos
 */
repos.get("/",(_, res: Response) => {
    res.status(200).json(data);
});

/** 
 * Je suis sur la route /api/repos/IdRepo
 * On récupère tous le repo passé en paramètre
 */
repos.get("/:IdRepo",(req: Request, res: Response) => {
    const reposId = data.find((rep) => rep.id === req.params.IdRepo) as Repos;
    if(reposId){
        res.status(200).json(reposId);
    }
    else{
        res.status(404).send("Le repository n'a pas été trouvé");
    }
});

/** 
 * On récupère l'url du repo passé en paramètre
 */
repos.get("/:IdRepo/url",(req: Request, res: Response) => {
    const reposId = data.find((rep) => rep.id === req.params.IdRepo);
    if(reposId){
        res.status(200).send(reposId.url);
    }
    else{
        res.status(404).send("Le repository n'a pas été trouvé");
    }
});

export default repos;