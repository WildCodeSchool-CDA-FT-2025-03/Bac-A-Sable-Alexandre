import useRepos from "../services/useRepos";
import ListRepo from "../components/ListRepo";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

function Home(){
    const { data, getAllRepos } = useRepos();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getAllRepos(searchParams.get("limit") || "10", searchParams.get("isPrivate") || "false");
    }, [searchParams]);

    return (
        <>
        <h1>Mes Repos</h1>
        <label>
            Nombre de Repos 
            <select name="limit" value={searchParams.get("limit") || "10"} onChange={(e) => setSearchParams(searchParams => {
                searchParams.set("limit", e.target.value);
                return searchParams;
                })}
            >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="10">10</option>
            </select>
        </label>
        <label>
            Privé
            <input type="radio" value="true" name="isPrivate" onClick={(e) => setSearchParams(searchParams => {
                searchParams.set("isPrivate", e.currentTarget.value);
                return searchParams;
                })} /> Oui
            <input type="radio" value="false" name="isPrivate"onClick={(e) => setSearchParams(searchParams => {
                searchParams.set("isPrivate", e.currentTarget.value);
                return searchParams;
                })} /> Non
        </label>
        {data.map((myrepo) => (
            <ListRepo repo={myrepo} />
        ))}
        </>
    )
};

export default Home;