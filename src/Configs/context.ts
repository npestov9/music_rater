import { createContext, useContext } from "react";

export const APIContext = createContext<string | undefined>(undefined) 

export function useAPIContext() {
    const apiKey = useContext(APIContext);

    if (apiKey === undefined) {
        throw new Error ("API TOKEN NEEDS TO BE ASSIGNED");
    }

    return apiKey;
}
    
