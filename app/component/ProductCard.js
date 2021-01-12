import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function ProductCard () {
    return(
        <View style={styles.card}>
            <View style={{padding: 16}}>
                <Text style={{fontWeight: '700', fontStyle: 'normal', fontSize: 16, lineHeight: 24}}>Product selling</Text>
            </View>
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
});
export default ProductCard;