import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../shared/sharedStyles';

export const Header = (props) => {
    return (
        <View style={styles.itemContainer}>
            <Image
                style={styles.headerImage}
                source={props.image}
            />
            <Text style={props.style}>{props.heading}</Text>
        </View>
    );
}