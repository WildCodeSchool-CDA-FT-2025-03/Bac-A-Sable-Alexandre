import useRepos from "../services/useRepos";
import ListRepo from "../components/ListRepo";
import { useEffect } from "react";

function Home(){
    const { data, getAllRepos } = useRepos();

    useEffect(() => {
        getAllRepos();
    }, []);

    return (
        <>
        <h1>Mes Repos</h1>
        {data.map((myrepo) => (
            <ListRepo repo={myrepo} />
        ))}
        </>
    )
};

export default Home;