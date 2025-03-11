import type { Repos } from "../types/repos.types"
import { Link } from "react-router-dom";

type Props = {
    repo: Repos,
}

function ListRepo({repo} : Props){
    return (
        <>
        <div> - {repo.url}</div>
        <Link to={`/repos/${repo.id}`}>{repo.id}</Link>
        </>
    );
};

export default ListRepo;