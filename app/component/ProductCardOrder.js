import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

function ProductCardOrder({ image, product, stylecode, price }) {
    return (
        <View style={{ borderRadius: 16, borderColor: "#ededed", borderWidth: 1.5, padding: "4%", }}>
            <View style={{ flexDirection: "row", padding: "3%" }}>
                <Image source={image} style={{ borderRadius: 8, height: 100, width: 100 }} />
                <View style={{ margin: "5%", marginLeft: "8%", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>{product}</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: "5%" }}>{stylecode}</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: "8%", color: "#4EA127" }}>{price}</Text>
                </View>
            </View>
        </View>

    );
};

export default ProductCardOrder;