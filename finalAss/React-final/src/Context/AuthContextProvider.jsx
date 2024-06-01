import {createContext, useState} from 'react'

const AuthContext = createContext();

function AuthContextProvider({children}) {
const [AuthDetails, setAuthDetails] = useState({
    isLoggedIn: false,  //true
    token:null,
});

const login = (token) => {
    setAuthDetails({
        isLoggedIn: true,
        token: token,
    });
};

const logout = () =>{
    setAuthDetails({
        isLoggedIn: false,
        token: null,
    });
};

    return (

        <AuthContext.Provider value={{AuthDetails, login, logout}}>{children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };