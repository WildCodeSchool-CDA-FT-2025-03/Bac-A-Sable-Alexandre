import { useState } from "react";
import type { Repos } from "../types/repos.types";
import InputForm from "../components/forms/inputForm.tsx";
import CheckboxForm from "../components/forms/CheckboxForm.tsx";
import SelectLanguagesForm from "../components/forms/selectLanguagesForm.tsx";
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

function RepoForm(){
    const [newRepo,setNewRepo] = useState<Repos>(initRepo);
		const { addOneRepos } = useRepos();
    console.log(newRepo);

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
            <InputForm	title="Description du Repo" name="description" value={newRepo.description} handle={HandleAddRepo} />
            <InputForm	title="URL du Repo" name="url" value={newRepo.url} handle={HandleAddRepo} />
						<SelectLanguagesForm value={newRepo.languages[0].node.name} handle={HandleAddRepo} />
						<CheckboxForm	title="Privé ?" name="isPrivate" value={newRepo.isPrivate} handle={HandleAddRepo} />
						<button type="submit">Ajouter</button>
        </form>
    )
};

export default RepoForm;