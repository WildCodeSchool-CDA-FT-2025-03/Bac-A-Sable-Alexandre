import { useParams, Navigate } from "react-router-dom";
import useRepos from "../services/useRepos";
import { useEffect } from "react";

/**
 * Page affichage d'un repo
 * useParams -> Utilisation des paramètres pour recuperer l'id
 * useRepos -> Va chercher le Repos
 * @returns Repo selectionné
 */
export default function MyRepo() {
  const { id } = useParams();
  const { dataMyRepo, getMyRepos, error } = useRepos();

  useEffect(() => {
    getMyRepos(id as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (error) {
    return <Navigate to="/Error" replace />;
  }

  return (
    <div>
      <h1>My Repo : {id}</h1>
      {dataMyRepo &&
        dataMyRepo.languages.map((myrepo) => <div>{myrepo.node.name}</div>)}
    </div>
  );
}
