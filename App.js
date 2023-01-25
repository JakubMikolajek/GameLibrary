import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import GameOverviewScreen from "./src/screens/GameOverviewScreen";
import GameDetailScreen from "./src/screens/GameDetailScreen";
import DrawerNavigation from "./src/components/Navigation/DrawerNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AuthContextProvider from "./src/store/auth-context";

const Stack = createNativeStackNavigator();

const App = () => {
    const queryClient = new QueryClient()

    return (
        <Provider store={store}>
            <StatusBar style="auto"/>
            <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                    <AuthContextProvider>
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
                    </AuthContextProvider>
                </QueryClientProvider>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
