import Register from "../components/Account/Register";
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()

    const registerHandler = (data) => {
        authCtx.registerFn(data.email, data.password)
        navigation.navigate("Login")
    }
    return <Register onSubmit={registerHandler}/>
}

export default RegisterScreen

