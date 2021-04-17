import React from 'react';
import { Button, View, Text, StyleSheet, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { Header } from './Header';
import { Footer } from './Footer';

const Plants = ( {navigation, route} ) => {
    const title = route.params.title;
    // console.log(route);
    return (
        <View>
            {/* style={styles.mainView}> */}
            {/* <Text>{title}</Text> */}
            {/* <TouchableOpacity
                style={styles.touchableView}
                onPress={()=> { navigation.navigate("App_to_Home") }} >
                <View>
                    <Text style={styles.touchableText}>Home</Text>
                </View>
            </TouchableOpacity> */}
            <SectionList
                sections={PLANTS}
                renderItem={renderPlant}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => index}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            />
        </View>
    )
};

const renderSectionHeader = ({section}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{section.title}</Text>
        </View>
    );
}

const renderPlant = ({item, index}) => {
    return (
        <View key={index} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{'Plant: ' + item.name}</Text>
            <Text style={styles.sectionDescription}>{'Sun: ' + item.sun}</Text>
        </View>
    );
}

const HeaderComponent = () => {
    return (
        <Header
            image={require('../images/purple-fountain-grass1024x512.jpg')}
            heading={'Plants List'}
            style={styles.sectionTitle}
        />
    );
}

const FooterComponent = () => {
    return <Footer />;
}


export default Plants;