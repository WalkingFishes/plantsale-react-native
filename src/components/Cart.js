import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Pressable, TouchableOpacity, Alert } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import styles from '../shared/sharedStyles';
import { PRICING } from '../shared/pricing';
import { PLANTS } from '../shared/plants';
import { Footer } from '../components/Footer';

const CartItem = ({key, ordPlant}) => {
    const plant = ordPlant.plant;
    const varietyIndex = ordPlant.varietyIndex;
    const [quantity, setQuantity] = useState(ordPlant.quantity);
    const pricingGroup = PRICING.filter(
        (group) => group.container.name === plant.container
    )[0];
    const priceString = "$" + (pricingGroup.container.price / 100).toFixed(2);
    const containerString = pricingGroup.container.description;
    const plantImage = plant.variety[varietyIndex].image;
    const plantVariety = plant.variety[varietyIndex].name;
    const totalString = "Total: $" + (pricingGroup.container.price * quantity/100).toFixed(2);
    return (
        <View style={styles.detailContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.detailImage}
                    source={plantImage}
                />
            </View>
            <Text style={styles.detailTitle}>{plant.name}</Text>
            <Text style={styles.detailDescription}>{plantVariety}</Text>
            <Text style={styles.detailDescription}>{containerString}</Text>
            <Text style={styles.detailDescription}>{priceString}</Text>
            <View style={styles.col}>
                <Text style={styles.text}>Qty:</Text>
                <InputSpinner
                    value={quantity}
                    style={styles.spinner2}
                    rounded={false}
                    showBorder={true}
                    onChange={(qty) => { 
                        setQuantity(qty);
                        console.log("Quantity updated to " + qty);
                    }}
                />
            </View>
            <Text style={styles.detailDescription}>{totalString}</Text>
            <TouchableOpacity
                style={styles.cartButton}
                onPress={()=> {console.log("Plant removed."); }} >
                <View>
                    <Text style={styles.touchableText}>Remove</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const CartItems = ({cart}) => {
    return cart.map((ordPlant, index) => {
        return (
            <CartItem key={index} ordPlant={ordPlant}/>
        );
    });
}

const Cart = ( {navigation, route} ) => {
    const cart = route.params.cart;

    return (
            <ScrollView style={styles.detailPage}>
                <CartItems cart={cart}/>
                <Footer />
            </ScrollView>
    );
}

export default Cart;