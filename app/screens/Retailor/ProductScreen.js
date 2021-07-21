import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableWithoutFeedback, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window')

const ProductScreen = ({ navigation, route }) => {
    const productdetails = route.params;

    return (
        <>
            <View style={{ alignItems: "center" }}>
                <ScrollView>
                    <View style={{ height: 500 }}>
                        <Swiper style={styles.wrapper} showsButtons={false}>
                            <View style={styles.slide1}>
                                <Image style={{ height: 500, width: "100%" }} source={productdetails.image} />
                            </View>
                            <View style={styles.slide1}>
                                <Image style={{ height: 500, width: "100%" }} source={productdetails.image} />
                            </View>
                            <View style={styles.slide1}>
                                <Image style={{ height: 500, width: "100%" }} source={productdetails.image} />
                            </View>
                        </Swiper>
                    </View>

                    <View style={{ marginTop: "4%", marginLeft: "4%" }}>
                        <Text style={{ fontWeight: "700", fontSize: 20 }}>{productdetails.name}</Text>
                    </View>

                    <View style={{ marginTop: "2%", marginLeft: "4%", flexDirection: "row" }}>
                        <Text style={{ color: "#5f5f5f" }}>Style code:</Text>
                        <Text style={{ marginLeft: "2%" }}>1303</Text>
                    </View>

                    <View style={{ marginTop: "4%", marginLeft: "4%" }}>
                        <Text style={{ fontSize: 15, fontWeight: "700" }}>Product details</Text>
                    </View>

                    <View style={{ marginTop: "2%", marginLeft: "4%", marginRight: "4%" }}>
                        <Text style={{ lineHeight: 25 }}>Black and golden printed A-line kurti, has a mandarin collar, three-quarter sleeves, flared hem</Text>
                    </View>

                    <TouchableWithoutFeedback style={{ marginLeft: "4%" }}>
                        <View style={{ marginLeft: "4%" }}>
                            <Text style={{ color: "blue" }}>See More</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{ flexDirection: "row", marginLeft: "4%", marginTop: "4%" }}>
                        <Text style={{ color: "green", fontSize: 18, fontWeight: "bold" }}>MRP: {productdetails.price}</Text>
                        <Text style={{ color: "red", fontSize: 18, marginLeft: "8%", fontWeight: "bold" }}>WSP: {productdetails.price}</Text>
                    </View>

                    <View style={{ marginLeft: "4%", marginTop: "6%" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Colors Available</Text>
                    </View>

                    <View style={{ marginLeft: "4%", marginTop: "2%", flexDirection: "row" }}>
                        <View style={{ borderRadius: 40, height: 40, width: 40, backgroundColor: "black" }} />
                        <View style={{ borderRadius: 40, height: 40, width: 40, backgroundColor: "pink", marginLeft: "4%" }} />
                        <View style={{ borderRadius: 40, height: 40, width: 40, backgroundColor: "grey", marginLeft: "4%" }} />
                        <View style={{ borderRadius: 40, height: 40, width: 40, backgroundColor: "green", marginLeft: "4%" }} />
                    </View>

                    <View style={{ marginLeft: "4%", marginTop: "6%" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Size Available</Text>
                    </View>

                    <View style={{ marginLeft: "4%", marginTop: "2%", flexDirection: "row" }}>
                        <View style={{ borderRadius: 40, height: 40, width: 40, borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>S</Text>
                        </View>
                        <View style={{ borderRadius: 40, height: 40, width: 40, borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>M</Text>
                        </View>
                        <View style={{ borderRadius: 40, height: 40, width: 40, borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>L</Text>
                        </View>
                        <View style={{ borderRadius: 40, height: 40, width: 40, borderColor: "black", borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>XL</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: "2%", marginLeft: "4%" }}>
                        <Text style={{ color: "red", fontWeight: "bold" }}>*The minimum order for this product is 200</Text>
                    </View>

                    <View style={{ marginTop: "6%", marginLeft: "4%" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Similar Products</Text>
                    </View>

                    <View style={{ marginTop: 24, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: "4%", marginRight: "4%" }}>

                            <View style={{ width: "48%" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                                    <Image source={require("../../image/Rectangle459.png")} style={{ width: "100%", height: 250, borderRadius: 8 }} />
                                    <Text style={{ marginTop: 8, fontWeight: "bold", fontStyle: 'normal', fontSize: 16, lineHeight: 30 }}>Shirt</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, color: "#5f5f5f" }}>Men</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, fontWeight: "bold" }}>₹ 1050</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "48%" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Product")} >
                                    <Image source={require("../../image/Rectangle469.png")} style={{ width: "100%", height: 250, borderRadius: 8 }} />
                                    <Text style={{ marginTop: 8, fontWeight: "bold", fontStyle: 'normal', fontSize: 16, lineHeight: 30 }}>Shirt</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, color: "#5f5f5f" }}>Men</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, fontWeight: "bold" }}>₹ 1050</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: "4%", marginRight: "4%" }}>

                            <View style={{ width: "48%" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                                    <Image source={require("../../image/Rectangle460.png")} style={{ width: "100%", height: 250, borderRadius: 8 }} />
                                    <Text style={{ marginTop: 8, fontWeight: "bold", fontStyle: 'normal', fontSize: 16, lineHeight: 30 }}>Shirt</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, color: "#5f5f5f" }}>Men</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, fontWeight: "bold" }}>₹ 1050</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "48%" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                                    <Image source={require("../../image/Rectangle461.png")} style={{ width: "100%", height: 250, borderRadius: 8 }} />
                                    <Text style={{ marginTop: 8, fontWeight: "bold", fontStyle: 'normal', fontSize: 16, lineHeight: 30 }}>Shirt</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, color: "#5f5f5f" }}>Men</Text>
                                    <Text style={{ fontStyle: 'normal', fontSize: 14, lineHeight: 30, fontWeight: "bold" }}>₹ 1050</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={{ bottom: 75, height: 50, width: 200, borderRadius: 40, backgroundColor: "#444eed", alignItems: "center", justifyContent: "center" }}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Variation")}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>Start ordering</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default ProductScreen;