import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import AccountScreen from "../../screens/AccountScreen";
import FavoriteGamesScreen from "../../screens/FavoriteGamesScreen";
import React from "react";

const Tab = createBottomTabNavigator();

const TabMenu = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Account" component={AccountScreen} options={{
                title: "Twoje konto",
                tabBarIcon: ({color, size}) => (<Ionicons name="person-outline" color={color} size={size}/>)
            }}/>
            <Tab.Screen name="Favorites" component={FavoriteGamesScreen} options={{
                title: "Ulubione",
                tabBarIcon: ({color, size}) => (<Ionicons name="heart-outline" color={color} size={size}/>)
            }}/>
        </Tab.Navigator>
    )

}

export default TabMenu