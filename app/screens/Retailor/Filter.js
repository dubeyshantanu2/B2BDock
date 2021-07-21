import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const Filter = ({ navigation }) => {
    return (
        <>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: 'column', margin: 16 }}>

                    <View style={{ marginTop: "4%" }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", lineHeight: 22, color: "#223263" }}>Quantity</Text>
                    </View>

                    <View style={{ marginTop: "6%" }}>
                        <Slider
                            style={{ width: "100%", height: 40 }}
                            maximumValue={5000}
                            minimumTrackTintColor="#40BFFF"
                            maximumTrackTintColor="#EBF0FF"
                            thumbTintColor="#444eed"
                        />
                    </View>

                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between", alignContent: "flex-start" }}>
                        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#9098B1" }}>MIN</Text>
                        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#9098B1" }}>MAX</Text>
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", lineHeight: 22, color: "#223263" }}>Patterns</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", height: 110, marginTop: 5 }}>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>All Listings</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 2, backgroundColor: "#4A69D6", borderRadius: 8, borderColor: "#4a69d6" }}>
                            <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 18, color: "#40BFFF" }}>Printed</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Checks</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Solid</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Embroidered</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Embroidered</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", lineHeight: 22, color: "#223263" }}>Sleeve</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", flexWrap: "wrap", height: 50, marginTop: 5 }}>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF", marginRight: "2%" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>3/4th</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 2, backgroundColor: "#4A69D6", borderRadius: 8, borderColor: "#4a69d6", marginRight: "2%" }}>
                            <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 18, color: "#40BFFF" }}>3/4th</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF", marginRight: "2%" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Bell Sleeves</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", lineHeight: 22, color: "#223263" }}>Length</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", height: 110, marginTop: 5 }}>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Mock Collar</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 2, backgroundColor: "#4A69D6", borderRadius: 8, borderColor: "#4a69d6" }}>
                            <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 18, color: "#40BFFF" }}>Round Neck</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Chinees Collar</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Solid</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>Embroidered</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", lineHeight: 22, color: "#223263" }}>Fabric</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", height: 170, marginTop: 5 }}>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>100% COTTON</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 2, backgroundColor: "#4A69D6", borderRadius: 8, borderColor: "#4a69d6" }}>
                            <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 18, color: "#40BFFF" }}>100% PLYGeorgette</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>100% Viscose</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 2, backgroundColor: "#4A69D6", borderRadius: 8, borderColor: "#4a69d6" }}>
                            <Text style={{ fontWeight: "700", fontSize: 14, lineHeight: 18, color: "#40BFFF" }}>100% COTTON</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>100% Viscise Cut Putta</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>100% COTTON</Text>
                        </View>
                        <View style={{ padding: 16, borderWidth: 1, borderRadius: 5, borderColor: "#EBF0FF" }}>
                            <Text style={{ color: "#9098B1", fontWeight: "400", fontSize: 14, lineHeight: 18 }}>100% Viscose</Text>
                        </View>
                    </View>

                </ScrollView>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#444eed", padding: 15, borderRadius: 32, marginBottom: 20, width: 250 }}
                    onPress={() => navigation.navigate("Profile")}>
                    <Text style={{ fontWeight: "500", fontSize: 18, lineHeight: 25, marginRight: "4%", color: "#fff" }}>Apply</Text>
                    <Icon name="chevron-forward-outline" size={26} color="#fff" />
                </TouchableOpacity>

            </View>

        </>
    );
};

export default Filter;