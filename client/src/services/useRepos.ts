import { useState, useEffect } from 'react';
import type { Repos } from "../types/repos.types";
import client from "../services/axios";

const useRepos = () => {
    const [data, setData] = useState<Repos[]>([]);

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

    useEffect(() => {
        getAllRepos();
    }, []);

    return { data };
}

export default useRepos;