import useRepos from "../services/useRepos";
import ListRepo from "../components/ListRepo";

function Home(){
    const { data } = useRepos();

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