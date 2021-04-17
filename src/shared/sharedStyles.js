import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    touchableView: {
        marginBottom: 30,
        width: 150,
        height: 50,
        alignItems: "center",
        backgroundColor: "green",
        borderWidth: 3,
        borderRadius: 10,
    },
    touchableText: {
        textAlign: "center",
        paddingTop: 7,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
    logo: {
        width: "100%",
        height: 250,
        opacity: 0.6,
        resizeMode: 'contain',
    },

});

export default styles;
