import Login from "../components/Account/Login"
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";

const LoginScreen = () => {
    const authCtx = useContext(AuthContext)
    const loginHandler = (data) => {
        authCtx.loginFn(data.email, data.password)
    }
    return <Login onSubmit={loginHandler}/>
}

export default LoginScreen
