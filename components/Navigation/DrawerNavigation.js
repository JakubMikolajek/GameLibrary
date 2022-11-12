import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import CategoryScreen from "../../screens/CategoryScreen";
import CartScreen from "../../screens/CartScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabMenu from "./BottomTabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Categories"
                options={{
                    title: "Kategorie",
                    drawerIcon: ({color, size}) => (<Ionicons name="apps" color={color} size={size}/>)
                }}
            >{(props) => <CategoryScreen {...props}/>}</Drawer.Screen>
            <Drawer.Screen name="Cart" options={{
                title: "Koszyk",
                drawerIcon: ({color, size}) => (<Ionicons name="cart-outline" color={color} size={size}/>)
            }}>{(props) => <CartScreen {...props}/>}</Drawer.Screen>
            <Drawer.Screen
                name="TabMenu"
                options={{
                    title: "Twój profil",
                    drawerIcon: ({color, size}) => (<Ionicons name="person-outline" color={color} size={size}/>)
                }}
            >{(props) => <TabMenu/>}</Drawer.Screen>

        </Drawer.Navigator>
    );
}

export default DrawerNavigation
