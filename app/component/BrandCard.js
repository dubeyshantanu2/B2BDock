import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const{ width } = Dimensions.get('window')

function BrandCard ( {image}) {
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.details}></View>
        </View>
    );
}

const styles= StyleSheet.create({
    card: {
        borderRadius: 16,
        marginBottom: 24,
        overflow: "hidden",
        borderColor: "#ededed",
        borderWidth: 1.5, 
    },
    image: {
        height: 218, 
        width: width-32   
    },
});
export default BrandCard;