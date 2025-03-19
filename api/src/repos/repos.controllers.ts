import { Request, Response } from "express";
import data from "../../data.json";
import type { Repos } from "../types/repos.types";

let dataAssign = data;

/**
 * Je suis sur la route /api/repos
 * On récupère tous les repos
 */

export const getAllRepos = (req: Request, res: Response) => {
  let resultat = dataAssign;
  if (req.query.isPrivate) {
    resultat = resultat.filter(
      (el) => el.isPrivate.toString() === req.query.isPrivate
    );
  }

  if (req.query.limit && +req.query.limit < resultat.length) {
    resultat = resultat.slice(resultat.length - +req.query.limit);
  }

  if (req.query.fields) {
    /*
    Recuperation de colonne a afficher sous forme de tableau
    */
    const fields =
      typeof req.query.fields === "string" ? req.query.fields.split(",") : [];

    /*
    Map de les resultat pour ne recuperer que les colonnes de fields
    */
    resultat = resultat.map((el: Repos) => {
      const res = fields.reduce(
        (acc, field) => ({ ...acc, [field]: el[field] }),
        {}
      );
      return res;
    }) as Repos[];
  }

  res.status(200).json(resultat);
};

/**
 * Je suis sur la route /api/repos/IdRepo
 * On récupère tous le repo passé en paramètre
 */
export const getOneRepos = (req: Request, res: Response) => {
  const reposId = dataAssign.find(
    (rep) => rep.id === req.params.IdRepo
  ) as Repos;
  if (reposId) {
    res.status(200).json(reposId);
  } else {
    res.status(404).send("Le repository n'a pas été trouvé");
  }
};

/**
 * On récupère l'url du repo passé en paramètre
 */
export const getAllReposUrl = (req: Request, res: Response) => {
  const reposId = dataAssign.find(
    (rep) => rep.id === req.params.IdRepo
  ) as Repos;
  if (reposId) {
    res.status(200).send(reposId.url);
  } else {
    res.status(404).send("Le repository n'a pas été trouvé");
  }
};

/**
 * Ajout d'une méthode post pour ajouter un repo
 * n'est pas ajouter au fichier mais à data
 */
export const createOneRepos = (req: Request, res: Response) => {
  const d = new Date().toISOString().split(".")[0] + "Z";
  const createdId = Array.from(
    { length: 10 },
    (i) =>
      [..."abcdefghijklmnopqrsuvwxyz0123456789"][
        Math.round(Math.ceil(Math.random() * 35))
      ]
  ).join("");

  dataAssign.push({ ...req.body, id: createdId, createdAt: d });

  res.status(200).json({ id: createdId });
};

/**
 * Ajout d'une méthode delete pour supprimer un repo
 */
export const deleteOneRepos = (req: Request, res: Response) => {
  dataAssign = dataAssign.filter((el) => el.id !== req.params.IdRepo);
  res.sendStatus(204);
};

export const deleteAllRepos = (req: Request, res: Response) => {
  if (req.query.isPrivate) {
    dataAssign = dataAssign.filter(
      (el) => el.isPrivate.toString() !== req.query.isPrivate
    );
  }
  if (req.query.id) {
    dataAssign = dataAssign.filter((el) => el.id.toString() !== req.query.id);
  }
  res.sendStatus(204);
};
