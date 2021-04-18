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
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
		borderBottomColor: 'rgb(176, 196, 222)',
		borderBottomWidth: StyleSheet.hairlineWidth,
    },
    sectionTitle: {
        display: "flex",
        marginTop: 12,
        marginBottom: 6,
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        justifyContent: "center",
    },
    sectionTitleGreen: {
        fontSize: 24,
        fontWeight: '600',
        color: 'green',
    },
    sectionDescription: {
        display: "flex",
        margin: 6,
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
        justifyContent: 'center',
    },
    sectionDescriptionBold: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    sectionImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    headerContainer: {
        paddingHorizontal: 24,
        marginBottom: 10,
        backgroundColor: 'lightsalmon',
        borderRadius: 6,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    },
    headerImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    footerImage: {
        width: 75,
        height: 75,
        resizeMode: 'cover',
    },
    footerContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        marginBottom: 40,
    },

});

export default styles;
