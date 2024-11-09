import { useEffect, useState, createContext, useContext } from "react";
import { getUser } from "../api/userRequest";


export const UsersContext = createContext();


export const useUser = () =>{
    const context = useContext(UsersContext);
    if(!context) {
        throw new Error("fallo");
        
    }
    return context
}

export const User = ({ children }) =>{
    const [users, setUser] = useState([]);


    const getUsers = async () =>{
        try {
            const res = await getUser();
            setUser(res)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UsersContext.Provider
    
        value= {{
            users,
            getUsers,
    
        }}
        >
        {children}
        </UsersContext.Provider>
    )
}




