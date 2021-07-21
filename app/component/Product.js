import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';


function Product({ image, name, gender, price, onPress }) {
    return (

        <TouchableWithoutFeedback onPress={onPress} underlayColor={"#e5e5e5"}>
            <View style={styles.card}>
                <Image style={{ height: 250, width: "100%", borderRadius: 16 }} source={image} />
                <Text style={{ marginTop: "4%", fontSize: 20, fontWeight: "700", marginLeft: "8%" }}>{name}</Text>
                <Text style={{ marginTop: "4%", fontSize: 16, marginLeft: "8%" }}>{gender}</Text>
                <Text style={{ marginTop: "4%", marginBottom: "4%", fontSize: 16, marginLeft: "8%" }}>{price}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        overflow: "hidden",
        borderColor: "#ededed",
        borderWidth: 1,
        elevation: 1,
        backgroundColor: "#fff",
        marginRight: "2%",
        marginLeft: "2%",
    },
});
export default Product;