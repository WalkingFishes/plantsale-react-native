import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Plants from './src/components/Plants';
import PlantDetail from './src/components/PlantDetail';
import { PLANTS } from './src/shared/plants';

const Stack = createStackNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="App_to_Home"
                // initialRouteName="Home_to_Plants"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: 'green'},
                    headerTitleStyle: {
                        fontSize: 24
                    }
                }}>
                <Stack.Screen
                    name="App_to_Home"
                    options={ ( {route} ) => ({title: "Home"})}
                    component={Home}
                />
                <Stack.Screen
                    name="Plants"
                    component={Plants}
                    options={ ( {route} ) => ({title: route.params.title})}
                />
                <Stack.Screen
                    name="PlantDetail"
                    component={PlantDetail}
                    options={ ( {route} ) => ({title: route.params.title})}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );
}
