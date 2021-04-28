import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { Footer } from '../components/Footer';
import AppStatusBar from '../components/AppStatusBar';

const Home = ( {navigation, route} ) => {

    const plantGroups = PLANTS.map((group) => {
        const groupTitle = group.title + " (" + group.data.length + ")";
        return (
            <Pressable
                key={group.group}
                style={styles.groupContainer}
                onPress={()=> { navigation.navigate( "Plants", { title: groupTitle, plantGroup: group.group }) }} >
                <View>
                    <View style={styles.groupImageContainer}>
                        <Image
                            style={styles.itemImage}
                            source={group.image}
                        />
                    </View>
                    <Text style={styles.groupTitle}>{group.title}</Text>
                    <Text style={styles.groupDescription}>{group.shortDescription}</Text>
                </View>
            </Pressable>
        );
    });
    return (
        <SafeAreaView>
            <AppStatusBar backgroundColor="green" barStyle="light-content" /> 
            <ScrollView contentContainerStyle={styles.mainScrollView}>
                <ImageBackground
                    style={styles.headerImage}
                    source={require("../images/purple-fountain-grass-blurred.jpg")}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>Scout Troop 34</Text>
                        <Text style={styles.headerTitle}>Plant Sale</Text>
                    </View>
                </ImageBackground>
                {plantGroups}
                <TouchableOpacity
                    style={styles.touchableView}
                    onPress={()=> { navigation.navigate("Cart", {title: "Cart", cart: cart}) }} >
                    <View>
                        <Text style={styles.touchableText}>View Cart</Text>
                    </View>
                </TouchableOpacity>
                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;