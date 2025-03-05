import express, { Response } from "express";

const repos = express.Router();
/** 
 * Je suis sur la route /api/repos
 */
repos.get("/",(_, res: Response) => {
    res.status(200).send("OK test repo");
})

export default repos;