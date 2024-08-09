import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/Home";
import NewScreen from "./screen/New";
import Restaurant from "./screen/Restaurant";
const Stack = createNativeStackNavigator()

export default function Navigation(params) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="New" component={NewScreen} />
                <Stack.Screen name="Restaurant" component={Restaurant}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}