import React from 'react';
import { Button, View, Text, StyleSheet, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';

const Plants = ( {navigation, route} ) => {
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
            {/* <SectionList
                sections={PLANTS}
                renderItem={renderPlant}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => index}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            /> */}
        </View>
    )
};

// const renderSectionHeader = ({section}) => {
//     return (
//         <View style={style.headerContainer}
export default Plants;