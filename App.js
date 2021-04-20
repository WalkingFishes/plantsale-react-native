import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import Order from './src/components/Order';
import Plants from './src/components/Plants';
import PlantDetail from './src/components/PlantDetail';

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
                    options={{
                        title: 'Home',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30
                        }
                    }}
                    component={Home}
                />
                <Stack.Screen
                    name="Plants"
                    options={{
                        title: 'Plants',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30
                        }
                    }}
                    component={Plants}
                    options={ ( {route} ) => ({title: route.params.title})}
                />
                <Stack.Screen
                    name="ViewOrder"
                    component={Order}
                    options={ ( {route} ) => ({title: route.params.title})}
                />
                <Stack.Screen
                    name="PlantDetail"
                    component={PlantDetail}
                    options={ ( {route} ) => ({title: route.params.title})}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );
}
