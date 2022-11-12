import React, {useState} from 'react'
import Login from "../components/Account/Login";
import Register from "../components/Account/Register";
import Account from "../components/Account/Account";

const AccountScreen = () => {
    const [login, setLogin] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const changeToRegisterPage = () => {
        setLogin(!login)
    }

    const loginHandler = () => {
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
    }

    if (!login) {
        return <Register onPress={changeToRegisterPage}/>
    }

    if (isLoggedIn) {
        return <Account logout={logoutHandler}/>
    }

    return (
        <Login login={loginHandler} onPress={changeToRegisterPage}/>
    )
}

export default AccountScreen
