import { useParams } from "react-router-dom";
import useRepos from "../services/useRepos";
import { useEffect } from "react";

export default function MyRepo(){
    const { id } = useParams();
    const { dataMyRepo, getMyRepos } = useRepos();

    useEffect(() => {
        getMyRepos(id as string);
    }, [id]);

    return (
        <div>
          <h1>My Repo : {id}</h1>
          {dataMyRepo && dataMyRepo.languages.map((myrepo) => (
            <div>{myrepo.node.name}</div>
          ))}
        </div>
      )
};
