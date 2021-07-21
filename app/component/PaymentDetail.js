import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

function PaymentDetail({ item, shipping, tax, total }) {
    return (
        <View style={{ borderRadius: 16, borderColor: "#ededed", borderWidth: 1.5, padding: "4%", }}>
            <View style={{ flexDirection: "column", padding: "3%" }}>

                <View style={{ margin: "4%", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)", }}>Items</Text>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)" }}>Rs. {item}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)", }}>Shipping</Text>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)" }}>Rs. {shipping}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)", }}>Tax</Text>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)" }}>Rs. {tax}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16, lineHeight: 22 }}>Total Price</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 16, lineHeight: 22, color: "#4EA127" }}>Rs. {total}</Text>
                    </View>

                </View>
            </View>
        </View>

    );
};

export default PaymentDetail;