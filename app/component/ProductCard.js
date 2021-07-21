import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function ProductCard({ image, product, stylecode, mrp, wsp }) {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row", }}>
                <Image source={image}
                    style={{ borderRadius: 16, margin: "4%", height: 120, width: 100 }} />
                <View style={{ flexDirection: "column", marginTop: "8%", marginLeft: "5%" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 34 }}>{product}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#5f5f5f", fontWeight: "500", fontSize: 16, lineHeight: 26 }}>Style Code: </Text>
                        <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 26 }}>{stylecode}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#4EA127", fontWeight: "500", fontSize: 16, lineHeight: 34 }}>MRP: </Text>
                        <Text style={{ color: "#4EA127", fontWeight: "500", fontSize: 16, lineHeight: 34 }}>{mrp}</Text>
                        <Text style={{ color: "#e10000", fontWeight: "500", fontSize: 16, lineHeight: 34, marginLeft: 24 }}>WSP: </Text>
                        <Text style={{ color: "#e10000", fontWeight: "500", fontSize: 16, lineHeight: 34 }}>{wsp}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        overflow: "hidden",
        borderColor: "#ededed",
        borderWidth: 1,
        height: 150,
        elevation: 7,
        backgroundColor: "#fff",
        marginLeft: "4%",
        marginRight: "4%"
    },
});
export default ProductCard;