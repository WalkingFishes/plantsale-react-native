import React from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { PRICING } from '../shared/pricing';
import { Header } from './Header';
import { Footer } from './Footer';
// import PlantDetail from './PlantDetail';

const Plants = ( {navigation, route} ) => {
    const type = route.params.plantGroup;
    const plants=PLANTS.filter((group) => group.group === type);
    return (
        <View>
            <FlatList
                data={plants[0].data}
                renderItem={({item, index}) => 
                <Pressable onPress={() => navigation.navigate('PlantDetail', {plant: item})}> 
                    <PlantCard item={item} index={index}/> 
                </Pressable>}
                keyExtractor={(item, index) => index.toString()}
                // ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
            />
        </View>
    )
};

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
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.sectionImage}
                        source={item.variety[0].image}
                    />
                </View>
                <Text style={styles.sectionDescription}>{item.sun}</Text>
                <Text style={styles.sectionTitle}>{item.name}</Text>
                <Text style={styles.sectionDescription}>{varietiesString}</Text>
                <Text style={styles.sectionDescription}>{priceString}</Text>
                <Text style={styles.sectionDescription}>{containerString}</Text>
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