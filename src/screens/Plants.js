import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Plants = ( {navigation, route} ) => {
    console.log(route);
    return (
        <View style={styles.mainView}>
            <Text>Plants</Text>
            <Button title="Home" onPress={() => {navigation.navigate("App_to_Home")}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default Plants;