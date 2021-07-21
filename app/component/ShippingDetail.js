import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

function ProductCardOrder({ date, type, reference, address }) {
    return (
        <View style={{ borderRadius: 16, borderColor: "#ededed", borderWidth: 1.5, padding: "4%", }}>
            <View style={{ flexDirection: "column", padding: "2%" }}>

                <View style={{ margin: "4%", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)", }}>Items</Text>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)" }}>{date}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)", }}>Shipping Type</Text>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)" }}>{type}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)", }}>Reference</Text>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)" }}>{reference}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "3%" }}>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)", }}>Address</Text>
                        <Text style={{ fontWeight: "400", fontSize: 16, lineHeight: 22, color: "rgba(34, 50, 99, 1)" }}>{address}</Text>
                    </View>
                </View>

            </View>
        </View>

    );
};

export default ProductCardOrder;