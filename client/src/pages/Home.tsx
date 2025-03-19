import useRepos from "../services/useRepos";
import ListRepo from "../components/ListRepo";
import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

/**
 * Page principale. Affichage de tous les Repos avec gestion de quelques paramètres
 * useRepos -> Va chercher la liste des Repos
 * useSearchParams -> Utilisation des paramètres
 * @returns Liste de tous les repos
 */
function Home() {
  const { data, getAllRepos, error } = useRepos();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getAllRepos(
      searchParams.get("limit") || "10",
      searchParams.get("isPrivate") || "false"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (error) {
    return <Navigate to="/Error" replace />;
  }

  return (
    <>
      <h1>Mes Repos</h1>
      <label>
        Nombre de Repos&nbsp;
        <select
          name="limit"
          value={searchParams.get("limit") || "10"}
          onChange={(e) =>
            setSearchParams((searchParams) => {
              searchParams.set("limit", e.target.value);
              return searchParams;
            })
          }
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="10">10</option>
        </select>
      </label>
      <label>
        Privé
        <input
          type="radio"
          value="true"
          name="isPrivate"
          checked={searchParams.get("isPrivate") === "true"}
          onClick={(e) =>
            setSearchParams((searchParams) => {
              searchParams.set("isPrivate", e.currentTarget.value);
              return searchParams;
            })
          }
        />{" "}
        Oui
        <input
          type="radio"
          value="false"
          name="isPrivate"
          checked={
            searchParams.get("isPrivate") === "false" ||
            !searchParams.get("isPrivate")
          }
          onClick={(e) =>
            setSearchParams((searchParams) => {
              searchParams.set("isPrivate", e.currentTarget.value);
              return searchParams;
            })
          }
        />{" "}
        Non
      </label>
      <div className="reposList">
        {data.map((myrepo) => (
          <ListRepo repo={myrepo} />
        ))}
      </div>
    </>
  );
}

export default Home;
