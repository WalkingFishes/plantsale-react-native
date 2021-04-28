import React, { useState, useContext } from 'react';
import { ScrollView, View, Text, Image, Pressable, TouchableOpacity, Alert } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import styles from '../shared/sharedStyles';
import { PRICING } from '../shared/pricing';
import { PLANTS } from '../shared/plants';
import { Footer } from '../components/Footer';
import CartContext from '../components/CartContext';


const CartItem = ({ordPlant, idx}) => {
    const cartFunc = useContext(CartContext);
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

    const removeFromCartWithAlert = () => {
        cartFunc.removeFromCart(plant, varietyIndex);
        Alert.alert(
            "Remove from Cart",
            plant.name + " " + plant.variety[varietyIndex].name + " removed from cart",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

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
                        cartFunc.updateCart(plant, varietyIndex, qty);
                    }}
                />
            </View>
            <Text style={styles.detailDescription}>{totalString}</Text>
            <TouchableOpacity
                style={styles.cartButton}
                onPress={()=> {removeFromCartWithAlert(); }} >
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
            <CartItem key={index} ordPlant={ordPlant} idx={index}/>
        );
    });
}

const Cart = ( {navigation, route} ) => {
    const cartFunc = useContext(CartContext);
    const cart = cartFunc.cart;

    return (
            <ScrollView style={styles.detailPage}>
                <CartItems cart={cart}/>
                <Footer />
            </ScrollView>
    );
}

export default Cart;