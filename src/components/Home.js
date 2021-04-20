import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { Footer } from '../components/Footer';

const Home = ( {navigation} ) => {
    const plantGroups = PLANTS.map((group) => {
        const groupTitle = group.title + " (" + group.data.length + ")";
        return (
            <TouchableOpacity
                key={group.group}
                style={styles.touchableView}
                onPress={()=> { navigation.navigate( "Plants", { title: groupTitle, plantGroup: group.group, }) }} >
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
                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;