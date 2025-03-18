import express, { Request, Response } from "express";
import { validateData } from "../../repos/repos.validation";
import { getAllRepos, getOneRepos, getAllReposUrl, createOneRepos, deleteOneRepos, deleteAllRepos } from "../../repos/repos.controllers";

const repos = express.Router();

/** 
 * Je suis sur la route /api/repos
 * On récupère tous les repos
 */
repos.get("/", getAllRepos);

/** 
 * Je suis sur la route /api/repos/IdRepo
 * On récupère tous le repo passé en paramètre
 */
repos.get("/:IdRepo", getOneRepos);

/** 
 * On récupère l'url du repo passé en paramètre
 */
repos.get("/:IdRepo/url", getAllReposUrl);

/** 
 * Ajout d'une méthode post pour ajouter un repo
 * n'est pas ajouter au fichier mais à data
 */
repos.post("/", validateData , createOneRepos);

/** 
 * Ajout d'une méthode delete pour supprimer un repo
 */
repos.delete("/:IdRepo", deleteOneRepos);

/** 
 * Ajout d'une méthode delete plusieurs repo selon certain critère
 */
repos.delete("/", deleteAllRepos);

export default repos;