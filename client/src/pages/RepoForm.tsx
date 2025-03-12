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
    
    return (
        <form>
            <h1>Ajout d'un nouveau Repo</h1>
            <label>
                Description du Repo
                <input type="text" name="description" value={newRepo?.description} onChange={(e) => {
                    setNewRepo(() => ({...newRepo, [e.target.name]: e.target.value}))
                }} />    
            </label>
        </form>
    )
};

export default RepoForm;