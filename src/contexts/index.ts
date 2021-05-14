import { createContext } from "react";
import { SearchServerInterface } from "../models";


export const ApiContext = createContext<SearchServerInterface | undefined>(undefined);
