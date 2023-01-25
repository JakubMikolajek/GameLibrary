import {createContext, useState} from "react";
import {client} from "../supabase/supabase";

export const AuthContext = createContext({
    isAuth: false,
    userId: null,
    loginFn: (email, password) => {
    },
    logoutFn: () => {
    },
    registerFn: (email, password) => {
    }
})

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [userId, setUserId] = useState(null)

    const loginFn = async (email, password) => {
        return await client.auth.signInWithPassword({
            email: email,
            password: password
        }).then(async (response) => {
            setUserId(response.data.user.id)
            setIsAuth(true)
        })
    }
    const logoutFn = async () => {
        return await client.auth.signOut().then(async () => {
            setIsAuth(false)
        })
    }
    const registerFn = async (email, password) => {
        return await client.auth.signUp({
            email: email,
            password: password
        }).then(async (response) => {
            console.log(response)
            }
        )
    }

    const value = {
        isAuth: isAuth,
        userId: userId,
        loginFn,
        logoutFn,
        registerFn
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider