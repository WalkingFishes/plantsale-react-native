import React from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { PRICING } from '../shared/pricing';
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
                <Pressable onPress={() => navigation.navigate('PlantDetail', {title: item.name, plant: item})}> 
                    <PlantCard item={item} index={index}/> 
                </Pressable>}
                keyExtractor={(item, index) => index.toString()}
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
            <View key={index} style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.itemImage}
                        source={item.variety[0].image}
                    />
                </View>
                <Text style={styles.itemDescription}>{item.sun}</Text>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{varietiesString}</Text>
                <Text style={styles.itemDescription}>{priceString}</Text>
                <Text style={styles.itemDescription}>{containerString}</Text>
            </View>
    );
}

const FooterComponent = () => {
    return <Footer />;
}

export default Plants;