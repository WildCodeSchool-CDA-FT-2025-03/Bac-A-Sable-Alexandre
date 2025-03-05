import express, { Request, Response } from "express";
import data from "../../data.json";
import type { Repos } from "../repos/repos.types";
import { validateData } from "../repos/repos.validation";

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
    const reposId = data.find((rep) => rep.id === req.params.IdRepo) as Repos;
    if(reposId){
        res.status(200).send(reposId.url);
    }
    else{
        res.status(404).send("Le repository n'a pas été trouvé");
    }
});

/** 
 * Ajout d'une méthode post pour ajouter un repo
 * n'est pas ajouter au fichier mais à data
 */
repos.post("/", validateData ,(req: Request, res: Response) => {
    const createdId = Array.from({ length: 10 }, i => [..."abcdefghijklmnopqrsuvwxyz0123456789"][Math.round(Math.ceil(Math.random() * 35))]).join('');
    data.push({ ...req.body, id: createdId });
    res.status(200).json({ id: createdId });
});

export default repos;