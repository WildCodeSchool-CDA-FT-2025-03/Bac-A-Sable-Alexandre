import type { Languages } from "./languages.types";

export type Repos = {
  createdAt?: string;
  description: string;
  id?: string;
  isPrivate: boolean;
  languages: Languages[];
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
