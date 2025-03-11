import { useState, useEffect } from 'react';
import type { Repos } from "../types/repos.types";
import client from "../services/axios";

const useRepos = () => {
    const [data, setData] = useState<Repos[]>([]);
    const [dataMyRepo, setMyRepo] = useState<Repos>();

    const getAllRepos = () => {
        client
            .get("/repos")
            .then((repos) => {
                setData(repos.data as Repos[]);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getMyRepos = (id: string) => {
        client
            .get(`/repos/${id}`)
            .then((repos) => {
                setMyRepo(repos.data as Repos);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getAllRepos();
    }, []);

    return { data, dataMyRepo, getMyRepos };
}

export default useRepos;