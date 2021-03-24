import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ( {navigation} ) => {
    return (
        <View style={styles.mainView}>
            <Text>Home</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> { navigation.navigate("Home_to_Plants") }} >
                <View>
                    <Text style={styles.buttonText}>Plants</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> { navigation.navigate("Home_to_Order") }} >
                <View>
                    <Text style={styles.buttonText}>View Order</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
  button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
  },
  buttonText: {
      fontSize: 20,
      color: '#fff',
  },

});

export default Home;