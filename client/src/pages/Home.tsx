import useRepos from "../services/useRepos";
import ListRepo from "../components/ListRepo";
import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import SelectForm from "../components/forms/SelectForm";
import SelectInputRadio from "../components/forms/InputRadio";

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

  const HandleAllRepo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === "isPrivate") {
      setSearchParams((searchParams) => {
        searchParams.set("isPrivate", e.currentTarget.value);
        return searchParams;
      })
    }
    else
    {
      setSearchParams((searchParams) => {
        searchParams.set("limit", e.target.value);
        return searchParams;
      })
    }
  };

  return (
    <>
      <h1>Mes Repos</h1>
      <label>
        <SelectForm
          name="limit"
          value={searchParams.get("limit") || "10"}
          title="Nombre de Repos Affiché "
          option={["2", "3", "10"]}
          handle={HandleAllRepo}
        />
      </label>
      <div className="input-group">
        Privé
        <SelectInputRadio
          name="isPrivate"
          option={[
            {
              id:"isPrivateOui",
              value:"true",
              textLabel:"Oui"
            },
            {
              id:"isPrivateNon",
              value:"false",
              textLabel:"Non"
            }
          ]}
          value={searchParams.get("isPrivate") || "false"}
          handle={HandleAllRepo}
          />
      </div>
      <div className="reposList">
        {data.map((myrepo) => (
          <ListRepo repo={myrepo} />
        ))}
      </div>
    </>
  );
}

export default Home;
