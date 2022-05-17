import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

const ScreenOne = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.banner}
                    source={require('../assets/Graphic_Elements_1_.png')}
                />
            </View>
            <View>


                <Text style={styles.subTitle}>Securely store your healthcare</Text>
                <Text style={styles.title}>Information</Text>
                <Text style={styles.paragraph}>Link Me provides Australian Healthcare clients a central platform to store and use your healthcare information.</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('ScreenTwo')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },
    button: {
        backgroundColor: "#77ACA2",
        paddingVertical: 15,
        width: "50%",
        marginBottom: 20,
        borderRadius: 9,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign:"center"
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign:"center"
    },
    paragraph:{
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:16,
        textAlign:"center"
    }
});