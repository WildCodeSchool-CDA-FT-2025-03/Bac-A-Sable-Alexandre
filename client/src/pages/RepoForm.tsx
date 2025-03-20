import { useState } from "react";
import type { Repos } from "../types/repos.types";
import type { Languages } from "../types/languages.types.ts";
import InputForm from "../components/forms/inputForm.tsx";
import CheckboxForm from "../components/forms/CheckboxForm.tsx";
import SelectLanguagesForm from "../components/forms/SelectLanguagesForm.tsx";
import useRepos from "../services/useRepos.ts";

const initRepo = {
  description: "",
  isPrivate: false,
  languages: [
    {
      size: 0,
      node: { name: "" },
    },
  ],
  url: "",
};

/**
 * Page formulaire pour  créer un nouveau Repo
 * useState -> Pour gérer la valeur de chaque élément de mon formulaire
 * useRepos -> Pour envoyer le repo a ajouter
 */
function RepoForm() {
  const [newRepo, setNewRepo] = useState<Repos>(initRepo);
  const [msg, setMsg] = useState("");
  const { addOneRepos } = useRepos();

  const HandleAddRepo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index?: number
  ) => {
    if (e.target.name === "languages" && index !== undefined) {
      const newLanguages: Languages[] = newRepo.languages;
      newLanguages[index].node.name = e.target.value;
      setNewRepo(() => ({
        ...newRepo,
        languages: newLanguages,
      }));
    }
    else if (e.target.name === "size" && index !== undefined) {
      const newLanguages: Languages[] = newRepo.languages;
      newLanguages[index].size = Number(e.target.value);
      setNewRepo(() => ({
        ...newRepo,
        languages: newLanguages,
      }));
    } else if (e.target.name === "isPrivate") {
      setNewRepo(() => ({ ...newRepo, [e.target.name]: !newRepo.isPrivate }));
    } else {
      setNewRepo(() => ({ ...newRepo, [e.target.name]: e.target.value }));
    }
  };

  const handleAddClickRoom = () => {
    const newLanguages : Languages[] = newRepo.languages;
    newLanguages.push({ size: 0, node: { name: "" } });
    setNewRepo(() => ({
      ...newRepo,
      languages: newLanguages
    }));
  };

  const handleSubmitRepo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addOneRepos(newRepo);
      setMsg("Nouveau Repo Ajouté");
      setNewRepo(initRepo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Ajout d'un nouveau Repo</h1>
      <form onSubmit={handleSubmitRepo}>
        {msg}
        <div className="formElement">
          <InputForm
            title="Description du Repo"
            name="description"
            value={newRepo.description}
            handle={HandleAddRepo}
          />
        </div>
        <div className="formElement">
          <InputForm
            title="URL du Repo"
            name="url"
            value={newRepo.url}
            handle={HandleAddRepo}
          />
        </div>
        <div className="formElement">
          Choisir mon language
          {newRepo.languages.map((listeSelect, i) => (
            <div className="selectLanguage">
              <SelectLanguagesForm
                value={listeSelect.node.name}
                valuesize={listeSelect.size}
                handle={HandleAddRepo}
                index={i}
              />
            </div>
          ))}
          <button className="buttonPlus" type="button" onClick={()=> handleAddClickRoom()}> + Ajouter un language</button>
        </div>
        <div className="formElement">
          <CheckboxForm
            title="Privé ?"
            name="isPrivate"
            value={newRepo.isPrivate}
            handle={HandleAddRepo}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default RepoForm;
