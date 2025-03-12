import { useState } from "react";
import type { Repos } from "../types/repos.types";
import InputForm from "../components/forms/inputForm.tsx";

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
    console.log(newRepo);

    const HandleAddRepo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRepo(() => ({...newRepo, [e.target.name]: e.target.value}))
    }

    return (
        <form>
            <h1>Ajout d'un nouveau Repo</h1>
            <InputForm	title="Description du Repo" name="description" value={newRepo.description} handle={HandleAddRepo} />
            <InputForm	title="URL du Repo" name="url" value={newRepo.url} handle={HandleAddRepo} />
        </form>
    )
};

export default RepoForm;