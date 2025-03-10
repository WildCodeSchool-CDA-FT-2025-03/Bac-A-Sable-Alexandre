import type { Repos } from "../types/repos.types"

type Props = {
    repo: Repos,
}

function ListRepo({repo} : Props){
    return (
        <>
        <div> - {repo.url}</div>
        </>
    );
};

export default ListRepo;