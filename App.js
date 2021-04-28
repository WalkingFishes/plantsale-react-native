import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Plants from './src/components/Plants';
import PlantDetail from './src/components/PlantDetail';

import CartContext from './src/components/CartContext';

const Stack = createStackNavigator();

export default function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (iplant, ivarietyIndex, iquantity) => {
        console.log("Before add: " + cart);
        setCart(cart.concat({plant: iplant, varietyIndex: ivarietyIndex, quantity: iquantity}));
        console.log("After add: " + cart);
    };

    return (

        <CartContext.Provider value={{cart: cart, addToCart: addToCart}}>

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: 'green'},
                    headerTitleStyle: {
                        fontSize: 24
                    }
                }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    initialParams={{cart: cart}}
                    options={({ navigation, route }) => ({
                        title: "Home",
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={()=> { navigation.navigate("Cart", {title: "Cart", cart: cart}) }} >
                                <Text>View Cart</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Plants"
                    component={Plants}
                    options={({ navigation, route }) => ({
                        title: route.params.title,
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={()=> { navigation.navigate("Cart", {title: "Cart", cart: cart}) }} >
                                <Text>View Cart</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen
                    name="PlantDetail"
                    component={PlantDetail}
                    options={({ navigation, route }) => ({
                        title: route.params.title,
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={()=> { navigation.navigate("Cart", {title: "Cart", cart: cart}) }} >
                                <Text>View Cart</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </CartContext.Provider>
  );
}

