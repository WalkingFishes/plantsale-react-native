import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Order from './src/screens/Order';
import Plants from './src/screens/Plants';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="App_to_Home"
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
                        title: 'Plant Sale',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30
                        }
                    }}
                    component={Home}
                />
                <Stack.Screen
                    name="Home_to_Plants"
                    component={Plants}
                    options={ ( {route} ) => ({title: route.params.title})}
                />
                <Stack.Screen
                    name="Home_to_Order"
                    component={Order}
                    options={ ( {route} ) => ({title: route.params.title})}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
