import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "react-redux";

import {store} from "./store/store";
import GameOverviewScreen from "./screens/GameOverviewScreen";
import GameDetailScreen from "./screens/GameDetailScreen";
import DrawerNavigation from "./components/Navigation/DrawerNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const Stack = createNativeStackNavigator();

const App = () => {
    const queryClient = new QueryClient()

    return (
        <Provider store={store}>
            <StatusBar style="auto"/>
            <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Drawer" component={DrawerNavigation} options={{
                                headerShown: false,
                            }}/>
                            <Stack.Screen name="GamesOverview" component={GameOverviewScreen}/>
                            <Stack.Screen name="GameDetailShort" component={GameDetailScreen}
                                          options={{title: "O grze"}}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </QueryClientProvider>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
