import React from 'react';
import { Button, View, Text, StyleSheet, SectionList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { PRICING } from '../shared/pricing';
import { Header } from './Header';
import { Footer } from './Footer';

const Plants = ( {navigation, route} ) => {
    // const title = route.params.title;
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
                // ListHeaderComponent={HeaderComponent}
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
    // const plantImage=require('../images/' + item.variety[0].image);
    let varietiesString;
    if (item.variety.length > 1) {
        varietiesString = item.variety.length + " varieties";
    } else {
        varietiesString = item.variety[0].name;
    }
    const pricingGroup = PRICING.filter(
        (group) => group.container.name === item.container
    )[0];
    const priceString = "Price - $" + (pricingGroup.container.price / 100).toFixed(2);
    const containerString = pricingGroup.container.description;
        // item.variety.length + " varieties";
    return (
        <View key={index} style={styles.sectionContainer}>
            <Image
                style={styles.sectionImage}
                source={item.variety[0].image}
            />
            <Text style={styles.sectionDescription}>{item.sun}</Text>
            <Text style={styles.sectionTitle}>{item.name}</Text>
            <Text style={styles.sectionDescription}>{varietiesString}</Text>
            <Text style={styles.sectionDescription}>{priceString}</Text>
            <Text style={styles.sectionDescription}>{containerString}</Text>
        </View>
    );
}

const DynamicImage = (props) => {
    return (
        // <View style={styles.sectionContainer}>
            <Image
                style={styles.sectionImage}
                source={props.image}
            />
        // </View>
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