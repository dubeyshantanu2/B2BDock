import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import NumericInput from 'react-native-numeric-input';

const { width, height } = Dimensions.get('window')

function ProductCartCard({ image, product, stylecode, color, value }) {
    return (
        <View style={styles.card}>

            <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>

                <View style={{ flexDirection: "row" }}>

                    <Image source={image}
                        style={{ borderRadius: 16, height: 140, width: 100 }} />

                    <View style={{ flexDirection: "column", marginTop: "6%", marginLeft: "5%" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 34 }}>{product}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#5f5f5f", fontWeight: "500", fontSize: 16, lineHeight: 26 }}>Style Code: </Text>
                            <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 26 }}>{stylecode}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#5f5f5f", fontWeight: "500", fontSize: 16, lineHeight: 26 }}>Color: </Text>
                            <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 26 }}>{color}</Text>
                        </View>
                    </View>

                    <Icon name="trash-outline" size={24} onPress={() => console.log('Product removed')} style={{ marginLeft: "25%", marginTop: "6%", color: "#e10000" }} />

                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", width: width - 64, marginTop: 16 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40, borderWidth: 1.5, justifyContent: "center", alingItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 34 }}>S</Text>
                        </View>
                        <View style={{ marginLeft: "8%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "400", lineHeight: 34 }}>Small</Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <NumericInput
                            value={value}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={30}
                            iconSize={25}
                            step={1}
                            minValue={0}
                            valueType='real'
                            rounded
                            textColor='#000'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#444eed'
                            leftButtonBackgroundColor='#444eed' />
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", width: width - 64, marginTop: 16 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40, borderWidth: 1.5, justifyContent: "center", alingItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 34 }}>M</Text>
                        </View>
                        <View style={{ marginLeft: "8%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "400", lineHeight: 34 }}>Medium</Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <NumericInput
                            value={0}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={30}
                            iconSize={25}
                            step={1}
                            minValue={0}
                            valueType='real'
                            rounded
                            textColor='#000'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#444eed'
                            leftButtonBackgroundColor='#444eed' />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: width - 64, marginTop: 16 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40, borderWidth: 1.5, justifyContent: "center", alingItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 34 }}>L</Text>
                        </View>
                        <View style={{ marginLeft: "8%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "400", lineHeight: 34 }}>Large</Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <NumericInput
                            value={0}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={30}
                            iconSize={25}
                            step={1}
                            minValue={0}
                            valueType='real'
                            rounded
                            textColor='#000'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#444eed'
                            leftButtonBackgroundColor='#444eed' />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: width - 64, marginTop: 16 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40, borderWidth: 1.5, justifyContent: "center", alingItems: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", lineHeight: 34 }}>XL</Text>
                        </View>
                        <View style={{ marginLeft: "8%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "400", lineHeight: 34 }}>Extra Large</Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <NumericInput
                            value={0}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={30}
                            iconSize={25}
                            step={1}
                            minValue={0}
                            valueType='real'
                            rounded
                            textColor='#000'
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor='#444eed'
                            leftButtonBackgroundColor='#444eed' />
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
        height: 400,
        elevation: 7,
        backgroundColor: "#fff",
        paddingTop: "4%",
        paddingLeft: "6%",

    },
});

export default ProductCartCard;