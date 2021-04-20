import React from 'react';
import { Text, View } from 'react-native';
import styles from '../shared/sharedStyles';

export const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.itemDescription}>
                {' '}
                All rights reserved by Scout Troop 34 2021.
            </Text>
        </View>
    );
}
