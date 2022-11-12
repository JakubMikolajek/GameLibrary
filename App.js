import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "react-redux";

import {store} from "./store/store";
import GameOverviewScreen from "./screens/GameOverviewScreen";
import GameDetailScreen from "./screens/GameDetailScreen";
import DrawerNavigation from "./components/Navigation/DrawerNavigation";

const Stack = createNativeStackNavigator();



const App = () => {
    return (
        <Provider store={store}>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Drawer"
                        options={{
                            headerShown: false,
                        }}
                    >{(props) => <DrawerNavigation {...props}/>}</Stack.Screen>
                    <Stack.Screen name="GamesOverview">{(props) => <GameOverviewScreen {...props}/>}</Stack.Screen>
                    <Stack.Screen name="GameDetailShort" options={{title: "O grze"}}>{(props) =>
                        <GameDetailScreen {...props}/>}</Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
