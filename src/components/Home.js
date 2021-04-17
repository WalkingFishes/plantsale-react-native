import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../shared/sharedStyles';

const Home = ( {navigation} ) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <Image
                style={styles.logo}
                source={require("../images/purple-fountain-grass1024x512.jpg")}/>
            {/* <Text>Home</Text> */}
            <TouchableOpacity
                style={styles.touchableView}
                onPress={()=> { navigation.navigate("Home_to_Plants", {title: "Plants List"}) }} >
                <View>
                    <Text style={styles.touchableText}>Plants</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchableView}
                onPress={()=> { navigation.navigate("Home_to_Order", {title: "My Order"}) }} >
                <View>
                    <Text style={styles.touchableText}>View Order</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Home;