import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';

const Home = ( {navigation} ) => {
    const plantGroups = PLANTS.map((group) => {
        return (
            <TouchableOpacity
                key={group.group}
                style={styles.touchableView}
                onPress={()=> { navigation.navigate("Plants", {title: group.title, plantGroup: group.group}) }} >
                <View>
                    <Text style={styles.touchableText}>{group.title}</Text>
                </View>
            </TouchableOpacity>
        );
    });
    return (
        <SafeAreaView style={styles.mainView}>
                <Image style={styles.headerImage}
                    source={require("../images/purple-fountain-grass1024x512.jpg")}/>
            <ScrollView contentContainerStyle={styles.mainScrollView} style={styles.mainView}>
                {plantGroups}
                <TouchableOpacity
                    style={styles.touchableView}
                    onPress={()=> { navigation.navigate("ViewOrder", {title: "My Order"}) }} >
                    <View>
                        <Text style={styles.touchableText}>View Order</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;