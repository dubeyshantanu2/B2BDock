import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

function OrderCard({ orderid, date, status, items, price, shareUri, downloadUri }) {
    return (
        <View style={{ borderRadius: 16, overflow: "hidden", borderColor: "#EBF0FF", borderWidth: 1, backgroundColor: "#fff", padding: "4%", margin: "4%" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20, lineHeight: 30 }}>Order Id: {orderid}</Text>
                <Icon name="share-social-outline" size={28} onPress={shareUri} />
            </View>
            <View style={{ marginTop: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontWeight: "400", fontSize: 14, lineHeight: 22, color: "#223263" }}>Order Date: {date}</Text>
                <Icon name="download-outline" size={28} onPress={downloadUri} />
            </View>

            <View style={{ marginTop: 16, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "400", fontSize: 14, lineHeight: 22, color: "#223263" }}>Order Status</Text>
                <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 22 }}>{status}</Text>
            </View>

            <View style={{ marginTop: 12, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "400", fontSize: 14, lineHeight: 22, color: "#223263" }}>Items</Text>
                <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 22 }}>{items} items purchased</Text>
            </View>

            <View style={{ marginTop: 12, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "400", fontSize: 14, lineHeight: 22, color: "#223263" }}>Price</Text>
                <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 22, color: "#444eed" }}>{price}</Text>
            </View>

        </View>
    );
};

export default OrderCard;