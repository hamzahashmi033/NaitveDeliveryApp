import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, Animated, Easing } from 'react-native';
import HomeScreen from "./screen/Home";
import NewScreen from "./screen/New";
import Restaurant from "./screen/Restaurant";
import Cart from "./screen/Cart";
import OrderPrepairing from "./screen/OrderPrepairing";
const Stack = createNativeStackNavigator()

export default function Navigation(params) {
    return (
        <NavigationContainer theme={{colors:{background:"transparent"}}}>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="New" component={NewScreen} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        
                        presentation: 'modal',
                        ...Platform.select({
                            android: {
                                animation: 'slide_from_bottom',
                                animationDuration: 500,
                            },
                        }),
                    }}
                />
                <Stack.Screen name="OrderPrepairing" options={{presentation:"fullScreenModal"}} component={OrderPrepairing}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}