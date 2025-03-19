import { useState } from "react";
import type { Repos } from "../types/repos.types";
import client from "../services/axios";

const useRepos = () => {
  const [data, setData] = useState<Repos[]>([]);
  const [dataMyRepo, setMyRepo] = useState<Repos>();
  const [error, setError] = useState(false);

  /**
   * Récupèration de tous les repos selon les paramètres
   * @param limit Nombre de repos affiché
   * @param isPrivate Les Repo sont-ils privé?
   */
  const getAllRepos = (limit: string, isPrivate: string) => {
    client
      .get(`/repos?limit=${limit}&isPrivate=${isPrivate}`)
      .then((repos) => {
        setData(repos.data as Repos[]);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  };

  /**
   * Va récupèrer les infos du Repo selectionné
   * @param id ID du repo
   */
  const getMyRepos = (id: string) => {
    client
      .get(`/repos/${id}`)
      .then((repos) => {
        setMyRepo(repos.data as Repos);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  };

  /**
   * Envoi en back les informations pour ajouter un nouveau Repo
   * @param repo Information du Repo a envoyé
   */
  const addOneRepos = async (repo: Repos) => {
    try {
      await client.post(`/repos`, repo);
    } catch (error) {
      console.error(error);
    }
  };

  return { data, dataMyRepo, getMyRepos, getAllRepos, addOneRepos, error };
};

export default useRepos;
