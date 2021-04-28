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

function plantInCart(cart, plant, varietyIndex) {
    let exists = cart.filter(
        (item) => (item.plant === plant && item.varietyIndex === varietyIndex)
    );

    return exists;
}

export default function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (iplant, ivarietyIndex, iquantity) => {
        let existingPlant = plantInCart(cart, iplant, ivarietyIndex);
        let newQty = iquantity;
        let newCart = cart.filter((item) => !(item.plant === iplant && item.varietyIndex === ivarietyIndex));
        if (existingPlant.length > 0) {
            newCart = cart.filter((item) => !(item.plant === iplant && item.varietyIndex === ivarietyIndex));
            newQty += existingPlant[0].quantity;
        }
        newCart.push({plant: iplant, varietyIndex: ivarietyIndex, quantity: newQty});
        setCart(newCart);
    };

    const updateCart = (iplant, ivarietyIndex, iquantity) => {
        let newCart = cart.filter((item) => !(item.plant === iplant && item.varietyIndex === ivarietyIndex));
        newCart.push({plant: iplant, varietyIndex: ivarietyIndex, quantity: iquantity});
        setCart(newCart);
    };

    const removeFromCart = (iplant, ivarietyIndex) => {
        setCart(cart.filter((item) => !(item.plant === iplant && item.varietyIndex === ivarietyIndex)));
    };

    return (

        <CartContext.Provider value={{cart: cart, addToCart: addToCart, updateCart: updateCart, removeFromCart: removeFromCart}}>

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
                                onPress={()=> { navigation.navigate("Cart", {title: "Cart"}) }} >
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
                                onPress={()=> { navigation.navigate("Cart", {title: "Cart"}) }} >
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
                                onPress={()=> { navigation.navigate("Cart", {title: "Cart"}) }} >
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

