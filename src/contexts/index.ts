import { createContext } from "react";
import { SearchSeverInterface } from "../models";


export const ApiContext = createContext<SearchSeverInterface | undefined>(undefined);
