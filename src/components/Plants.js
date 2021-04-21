import React from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import styles from '../shared/sharedStyles';
import { PLANTS } from '../shared/plants';
import { PRICING } from '../shared/pricing';
import { Footer } from './Footer';
// import PlantDetail from './PlantDetail';

const Plants = ( {navigation, route} ) => {
    const type = route.params.plantGroup;
    const addToCart = route.params.addToCart;
    console.log(route);
    const plants=PLANTS.filter((group) => group.group === type);
    return (
        <View>
            <FlatList
                data={plants[0].data}
                renderItem={({item, index}) => 
                <Pressable onPress={() => navigation.navigate('PlantDetail', {title: item.name, plant: item, addToCart: addToCart})}> 
                    <PlantCard item={item} index={index}/> 
                </Pressable>}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={FooterComponent}
            />
        </View>
    )
};
function sunInfo(flower) {
  let color;
  let emoji;
  switch (flower.sun) {
    case "full sun":
      color = "gold"
      emoji = 0x2600;
      break;
    case "filtered sun":
      color = "orange";
      emoji = 0x26C5;
      break;
    case "shade":
      color = "indigo"; 
      emoji = 0x2601;
      break;
    case "part shade":
      color = "slateblue";
      emoji = 0x26C5;
      break;
    default:
      color = "";
      emoji = "";
      break;
  }
  return [flower.sun, color, emoji];
}

const PlantCard = ({item, index}) => {
    const [sunShade, color, emoji] = sunInfo(item);
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
                <Text style={[styles.itemDescription, {color: color}]}>{item.sun + " " + String.fromCodePoint(emoji)}</Text>
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