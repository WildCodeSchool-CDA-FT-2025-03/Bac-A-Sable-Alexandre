import type { Repos } from "../types/repos.types"
import { Link } from "react-router-dom";

type Props = {
    repo: Repos,
}

function ListRepo({repo} : Props){
    return (
        <>
        <div className="reposInfo">
            <div className="reposID"><Link to={`/repos/${repo.id}`}>ID : {repo.id}</Link></div>
            <div className="reposURL">{repo.url}</div>
        </div>
        </>
    );
};

export default ListRepo;