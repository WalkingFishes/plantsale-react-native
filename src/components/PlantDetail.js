import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Pressable, TouchableOpacity, Alert } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import styles from '../shared/sharedStyles';
import { PRICING } from '../shared/pricing';
import { Footer } from '../components/Footer';

function PlantDetail ( {navigation, route} ) {

    let item = route.params.plant;
    const [quantity, setQuantity] = useState(1);
    const [varietyIndex, changeVarietyIndex] = useState(0);

    let varietiesString;
    if (item.variety.length > 1) {
        varietiesString = item.variety.length + " varieties";
    } else {
        varietiesString = item.variety[0].name;
    }
    const pricingGroup = PRICING.filter(
        (group) => group.container.name === item.container
    )[0];
    const priceString = "$" + (pricingGroup.container.price / 100).toFixed(2);
    const containerString = pricingGroup.container.description;
    const thumbnails = item.variety.map((variety, index) => {
        return (
            <Pressable key={index} onPress={() => changeVarietyIndex(index)}> 
                <Image
                    style={styles.thumbnail}
                    source={variety.image}
                />
            </Pressable>
        );
    });

    const addToCart = (plant) => {
        Alert.alert(
            "Add to Cart",
            quantity + " " + plant.name + " " + plant.variety[varietyIndex].name + " added to cart",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    return (
            <ScrollView style={styles.detailPage}>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailTitle}>{item.name}</Text>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Text style={styles.detailDescriptionLeft}>{containerString}</Text>
                        <Text style={styles.detailDescriptionRight}>{priceString}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.detailImage}
                            source={item.variety[varietyIndex].image}
                        />
                    </View>
                    <Text style={styles.detailDescription}>{item.variety[varietyIndex].name}</Text>
                    <View style={styles.thumbnailContainer}>
                        {thumbnails}
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <InputSpinner
                            value={quantity}
                            style={styles.spinner}
                            onChange={(qty) => { setQuantity(qty)}}
                        />
                        <TouchableOpacity
                            style={styles.cartButton}
                            onPress={()=> { addToCart(item) }} >
                            <View>
                                <Text style={styles.touchableText}>Add to Cart</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer />
            </ScrollView>
    );
}

export default PlantDetail;