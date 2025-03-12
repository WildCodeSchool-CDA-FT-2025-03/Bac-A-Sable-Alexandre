import { useState } from "react";
import type { Repos } from "../types/repos.types";

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
            <label>
                Description du Repo
                <input type="text" name="description" value={newRepo?.description} onChange={HandleAddRepo} />    
            </label>
            <label>
                URL du Repo
                <input type="text" name="url" value={newRepo?.url} onChange={HandleAddRepo} />    
            </label>
        </form>
    )
};

export default RepoForm;