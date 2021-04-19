import React from 'react';
import { Button, View, Text, StyleSheet, SectionList, Image, Pressable, Alert } from 'react-native';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { PRICING } from '../shared/pricing';
import { Header } from './Header';
import { Footer } from './Footer';
import PlantDetail from './PlantDetail';

const Plants = ( {navigation, route} ) => {
    // const title = route.params.title;
    // console.log(route);
    // console.log(props);
    return (
        <View>
            <SectionList
                sections={PLANTS}
                // renderItem={({item}) =>
                //     <Pressable onPress={() => navigation.navigate('PlantDetail', {name: 'PlantDetail'})}>
                //         {renderPlant(item)}
                //     </Pressable>
                // }

                renderItem={({item, index}) => 
                <Pressable onPress={() => navigation.navigate('PlantDetail', {plant: item})}> 
                    <PlantCard item={item} index={index}/> 
                </Pressable>}

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
const onPressFunction = (plant) => {
    Alert.alert(
        "Plant Card Pressed",
        plant.name,
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
}


const PlantCard = ({item, index}) => {
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