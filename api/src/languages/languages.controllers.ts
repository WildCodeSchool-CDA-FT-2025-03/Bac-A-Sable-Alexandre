import express, { Request, Response } from "express";
import data from "../../data.json";
import type { Repos } from "../types/repos.types";

const languages = express.Router();
let dataAssign = data;

/** 
 * Je suis sur la route /api/repos
 * On récupère tous les repos
 */
languages.get("/",(req: Request, res: Response) => {
  const languages = dataAssign.reduce((acc, field) => {
    field.languages.forEach((lg) => {
      if(!acc.includes(lg.node.name)) {
        acc.push(lg.node.name);
      }
      return acc;
    });
    return acc;
  },[] as string[]);

  res.status(200).json(languages);
});

export default languages;