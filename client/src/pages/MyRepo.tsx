import { useParams } from "react-router-dom";
import useRepos from "../services/useRepos";
import { useEffect } from "react";

function MyRepo(){
    const { id } = useParams();
    const { dataMyRepo, getMyRepos } = useRepos();

    useEffect(() => {
        getMyRepos(id as string);
    }, [id, getMyRepos]);

    return (
        <>
          <h1>My Repo</h1>
          {dataMyRepo && dataMyRepo.languages.map((myrepo) => (
            <div>{myrepo.node.name}</div>
          ))}
        </>
      )
};

export default MyRepo;