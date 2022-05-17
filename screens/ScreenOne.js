import React from 'react';
import {Button, StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";

const ScreenOne = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Text style={{paddingHorizontal: 10}}>skip</Text>
            ),
        });
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.banner}
                    source={require('../assets/Group.png')}
                />
            </View>
            <View>
                <Text style={styles.subTitle}>Bring your team work</Text>
                <Text style={styles.title}>Together</Text>
                <Text style={styles.paragraph}>Link Me is a platform which enables Australian Healthcare clients and their healthcare providers to communicate and collaborate, bringing back a multidisciplinary approach to your health.</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('ScreenTwo')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Next</Text>
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