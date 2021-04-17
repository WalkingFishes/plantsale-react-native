import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../shared/sharedStyles';

const Order = ( {navigation, route} ) => {
    const title = route.params.title;
    // console.log(route);
    return (
        <View style={styles.mainView}>
            {/* <Text>{title}</Text> */}
            <TouchableOpacity
                style={styles.touchableView}
                onPress={()=> { navigation.navigate("App_to_Home") }} >
                <View>
                    <Text style={styles.touchableText}>Home</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};


export default Order;