import type { Languages } from "../languages/languages.types";

export type Repos = {
    createdAt: string;
    description: string;
    id: string;
    isPrivate: boolean;
    languages: Languages[];
    url: string;
};
