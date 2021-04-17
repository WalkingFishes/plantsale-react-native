import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../shared/sharedStyles';

export const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            {/* <Image
                style={styles.footerImage}
                source={require('../images/G.png')}
            /> */}
            <Text style={styles.sectionDescription}>
                {' '}
                All rights reserved by Scout Troop 34 2021.
            </Text>
        </View>
    );
}
