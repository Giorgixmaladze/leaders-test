import { createContext, useState } from "react";
import { getLocal } from "../utils/localstorage";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [movies, setMovies] = useState(getLocal("movies") || [])
    const key = `74c140db`
    
    
    return (
        <AuthContext.Provider value={{name:"sg"}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider
