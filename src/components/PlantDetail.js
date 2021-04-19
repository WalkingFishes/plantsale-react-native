import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../shared/sharedStyles';
import { PRICING } from '../shared/pricing';

function PlantDetail ( {navigation, route} ) {

    let item = route.params.plant;
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
            <Pressable onPress={() => changeVarietyIndex(index)}> 
                <Image
                    key={index}
                    style={styles.thumbnail}
                    source={variety.image}
                />
            </Pressable>
        );
    });

    return (
            <View style={styles.detailContainer}>
                <Text style={styles.detailTitle}>{item.name}</Text>
                <View style={{display: "flex", flexDirection: "row"}}>
                    <Text style={styles.detailDescription, { flex: 1, textAlign: 'left' }}>{containerString}</Text>
                    <Text style={styles.detailDescription, { flex: 1, textAlign: 'right'}}>{priceString}</Text>
                </View>
                <Image
                    style={styles.sectionImage}
                    source={item.variety[varietyIndex].image}
                />
                {/* <Text style={styles.detailDescription}>{item.sun}</Text> */}
                <Text style={styles.detailDescription, {padding: 10, textAlign: 'center'}}>{item.variety[varietyIndex].name}</Text>
                <View style={styles.thumbnailContainer}>
                    {thumbnails}
                </View>
            </View>
    );
}

export default PlantDetail;