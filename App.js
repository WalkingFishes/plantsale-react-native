import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Plants from './src/components/Plants';
import PlantDetail from './src/components/PlantDetail';

const Stack = createStackNavigator();

export default function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (iplant, ivarietyIndex, iquantity) => {
        setCart([{plant: iplant, varietyIndex: ivarietyIndex, quantity: iquantity}]);
    };

    return (

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
                    initialParams={{cart: cart, addToCart: addToCart}}
                    options={({ navigation, route }) => ({
                        title: "Home",
                        addToCart: addToCart,
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={()=> { navigation.navigate("Cart", {title: "Cart", cart: cart, addToCart: addToCart}) }} >
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
  );
}

