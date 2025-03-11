import { useParams, Navigate } from "react-router-dom";
import useRepos from "../services/useRepos";
import { useEffect } from "react";

export default function MyRepo(){
    const { id } = useParams();
    const { dataMyRepo, getMyRepos, error } = useRepos();

    useEffect(() => {
        getMyRepos(id as string);
    }, [id]);

    if (error) {
        return <Navigate to="/Error" replace />;
    }

    return (
        <div>
          <h1>My Repo : {id}</h1>
          {dataMyRepo && dataMyRepo.languages.map((myrepo) => (
            <div>{myrepo.node.name}</div>
          ))}
        </div>
      )
};
