import { useState } from "react";
import type { Repos } from "../types/repos.types";
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
            node: { name : "" }
        }
    ],
    url: ''
};

/**
 * Page formulaire pour  créer un nouveau Repo
 * useState -> Pour gérer la valeur de chaque élément de mon formulaire
 * useRepos -> Pour envoyer le repo a ajouter
 */
function RepoForm(){
    const [newRepo,setNewRepo] = useState<Repos>(initRepo);
		const { addOneRepos } = useRepos();

    const HandleAddRepo = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
			if(e.target.name === "languages")
			{
				setNewRepo(() => ({
					...newRepo, 
					languages:[{ size:0, node:{ name: e.target.value } }],
				}));
			}
			else if(e.target.name === "isPrivate")
			{
				setNewRepo(() => ({...newRepo, [e.target.name]: !newRepo.isPrivate}));
			}
			else
			{
				setNewRepo(() => ({...newRepo, [e.target.name]: e.target.value}));
			}
    };

		const handleSubmitRepo = async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			
			try {
				await addOneRepos(newRepo);
			} catch (error) {
				console.error(error);
			}
		};

    return (
        <form onSubmit={handleSubmitRepo}>
            <h1>Ajout d'un nouveau Repo</h1>
            <div className="formElement"><InputForm	title="Description du Repo" name="description" value={newRepo.description} handle={HandleAddRepo} /></div>
            <div className="formElement"><InputForm	title="URL du Repo" name="url" value={newRepo.url} handle={HandleAddRepo} /></div>
						<div className="formElement"><SelectLanguagesForm value={newRepo.languages[0].node.name} handle={HandleAddRepo} /></div>
						<div className="formElement"><CheckboxForm	title="Privé ?" name="isPrivate" value={newRepo.isPrivate} handle={HandleAddRepo} /></div>
						<button type="submit">Ajouter</button>
        </form>
    )
};

export default RepoForm;