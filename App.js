import {StatusBar} from "expo-status-bar";
import {Ionicons} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Provider} from "react-redux";

import {store} from "./store/store";
import CategoryScreen from "./screens/CategoryScreen";
import GameOverviewScreen from "./screens/GameOverviewScreen";
import FavoriteGamesScreen from "./screens/FavoriteGamesScreen";
import GameDetailScreen from "./screens/GameDetailScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Categories"
                component={CategoryScreen}
                options={{title: "Kategorie"}}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoriteGamesScreen}
                options={{title: "Ulubione"}}
            />
        </Drawer.Navigator>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Drawer"
                        component={DrawerNavigation}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="GamesOverview" component={GameOverviewScreen}/>
                    <Stack.Screen name="GameDetailShort" component={GameDetailScreen} options={{title: "O grze"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
