import React from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window')

import AppButton from "../../component/AppButton";
import ProductCartCard from '../../component/ProductCartCard';

const CartScreen = ({ navigation }) => {
    return (

        <View style={{ alignItems: "center" }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginTop: "4%", marginLeft: "4%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: width - 16 }}>
                    <Text style={{ fontWeight: "bold", fontStyle: 'normal', fontSize: 18, lineHeight: 25, }}>Cart Details</Text>
                    <Text style={{ fontWeight: "400", fontStyle: 'normal', fontSize: 12, textDecorationLine: 'underline', lineHeight: 25, marginRight: "4%" }}>View Order Summary</Text>
                </View>

                <View style={{ marginTop: "4%", marginLeft: "4%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: width - 16 }}>
                    <Text style={{ fontWeight: "500", fontStyle: "normal", fontSize: 14, lineHeight: 25 }}>Order ID:</Text>
                    <Text style={{ fontWeight: "700", fontStyle: "normal", fontSize: 18, lineHeight: 25, marginRight: "4%" }}>#1122</Text>
                </View>

                <View style={{ marginTop: "4%", marginLeft: "4%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: width - 16 }}>
                    <Text style={{ fontWeight: "500", fontStyle: "normal", fontSize: 14, lineHeight: 25 }}>Order total:</Text>
                    <Text style={{ fontWeight: "700", fontStyle: "normal", fontSize: 18, lineHeight: 25, marginRight: "4%" }}>Rs. 45,000</Text>
                </View>

                <View style={{ marginTop: "4%", marginLeft: "4%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: width - 16 }}>
                    <Text style={{ fontWeight: "500", fontStyle: "normal", fontSize: 14, lineHeight: 25 }}>Delivery Fee:</Text>
                    <Text style={{ fontWeight: "700", fontStyle: "normal", fontSize: 18, lineHeight: 25, marginRight: "4%", color: "#4EA127" }}>Free</Text>
                </View>

                <View style={{ backgroundColor: "#C4C4C4", width: width - 32, marginLeft: "4%", height: 2, marginTop: "4%", }} />

                <View style={{ marginTop: "4%", marginLeft: "4%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: width - 16 }}>
                    <Text style={{ fontWeight: "700", fontStyle: "normal", fontSize: 18, lineHeight: 25 }}>Total:</Text>
                    <Text style={{ fontWeight: "700", fontStyle: "normal", fontSize: 18, lineHeight: 25, marginRight: "4%" }}>Rs. 45,000</Text>
                </View>

                <View style={{ marginTop: "6%", marginLeft: "4%", marginRight: "4%", flexDirection: "column" }}>
                    <ProductCartCard
                        image={require("../../image/Rectangle461.png")}
                        product="Embroied Kurti"
                        stylecode="1303"
                        color="Blue"
                        value="2"
                    />
                </View>

                <View style={{ marginTop: "6%", marginLeft: "4%", marginRight: "4%", flexDirection: "column" }}>
                    <ProductCartCard
                        image={require("../../image/Rectangle461.png")}
                        product="Embroied Kurti"
                        stylecode="1303"
                        color="Blue"
                        value="2"
                    />
                </View>

                <View style={{ marginTop: "6%", marginBottom: "4%", marginLeft: "4%", marginRight: "4%", flexDirection: "column" }}>
                    <ProductCartCard
                        image={require("../../image/Rectangle461.png")}
                        product="Embroied Kurti"
                        stylecode="1303"
                        color="Blue"
                        value="2"
                    />
                </View>

            </ScrollView>

            <View style={{ bottom: 80, width: "80%" }}>
                <AppButton title="Proceed to order" onPress />
            </View>

        </View>

    );
};

export default CartScreen;