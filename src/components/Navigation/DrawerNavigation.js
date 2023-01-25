import React, {useContext} from 'react'
import {Ionicons} from "@expo/vector-icons";
import CategoryScreen from "../../screens/CategoryScreen";
import CartScreen from "../../screens/CartScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabMenu from "./BottomTabNavigation";
import RegisterMenu from "./StackNavigation";
import {AuthContext} from "../../store/auth-context";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const authCtx = useContext(AuthContext)
    const isAuth = authCtx.isAuth

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Categories" component={CategoryScreen} options={{
                title: "Kategorie",
                drawerIcon: ({color, size}) => (<Ionicons name="apps" color={color} size={size}/>)
            }}/>
            <Drawer.Screen name="Cart" component={CartScreen} options={{
                title: "Koszyk",
                drawerIcon: ({color, size}) => (<Ionicons name="cart-outline" color={color} size={size}/>)
            }}/>
            <Drawer.Screen
                name="TabMenu" component={!isAuth ? RegisterMenu : TabMenu} options={{
                title: "Twój profil",
                drawerIcon: ({color, size}) => (<Ionicons name="person-outline" color={color} size={size}/>)
            }}/>

        </Drawer.Navigator>
    );
}

export default DrawerNavigation
