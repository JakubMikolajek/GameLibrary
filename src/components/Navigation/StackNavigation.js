import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginSreen";
import RegisterScreen from "../../screens/RegisterScreen";

const Stack = createNativeStackNavigator()

const RegisterMenu = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Login" component={LoginScreen} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

export default RegisterMenu

