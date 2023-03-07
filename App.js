import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store'; 
import BasketScreen from './screens/BasketScree';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer >
      <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} options={{presentation:"modal",headerShown:false}} />
        <Stack.Screen name="OrderPreparingScreen" component={OrderPreparingScreen} options={{presentation:"fullScreenModal",headerShown:false}} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} options={{presentation:"fullScreenModal",headerShown:false}} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}


 