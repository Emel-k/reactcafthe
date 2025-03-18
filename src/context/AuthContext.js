import React, {createContext, useState, useEffect} from 'react';
/*Exportation du contexte pour y avoir accès*/

export const AuthContext = createContext(null);

/*Création du provider pour la connexion et la deconnexion*/

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);// client
    const [token, setToken] = useState(null);// token JWT

    // Stockage dans le LocalStorage pour la persistance des données

    useEffect(() => {
        const storeToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if(storedUser && storeToken){
            setToken(storeToken);
            setUser(JSON.parse(storedUser));
        }

    }, []);

    //Si le token ou l'user changent, on met à jour le LocalStorage

    useEffect(() => {
        if(token && user){
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }, [token, user]);

    //Connexion (on recoit les données envoyées par l'API : token + infos client)

    const login = (jwt, userDate) => {
        setToken(jwt);
        setUser(userDate)
    }

    //Deconnexion

    const logout = () => {
        setToken(null);
        setUser(null);
    };

    const value = {
        token,
        user,
        login,
        logout,
        isAuthenticated : !!token,
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


