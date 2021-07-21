import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Swiper from 'react-native-swiper'

function StoreCard({ image1, image2, image3, size, outlet, orders }) {
    return (
        <View style={styles.card}>
            <Text style={{ marginBottom: 30, fontWeight: '700', fontStyle: 'normal', fontSize: 16, lineHeight: 24, left: 16, top: 35 }}>Store Images</Text>

            <View style={styles.sliderContainer}>
                <Swiper height={200}>
                    <View style={styles.slide}>
                        <Image source={image1} style={styles.sliderImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={image2} style={styles.sliderImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={image3} style={styles.sliderImage} />
                    </View>
                </Swiper>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 35, marginBottom: 25 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <Text style={{ fontWeight: '700', fontStyle: 'normal', fontSize: 14, lineHeight: 28 }}>{size}</Text>
                    <Text style={{ color: '#696969', fontWeight: '700', fontStyle: 'normal', fontSize: 14, lineHeight: 28 }}>Store Size</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <Text style={{ fontWeight: '700', fontStyle: 'normal', fontSize: 14, lineHeight: 28 }}>{outlet}</Text>
                    <Text style={{ color: '#696969', fontWeight: '700', fontStyle: 'normal', fontSize: 14, lineHeight: 28 }}>Total Outlets</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'nowrap' }}>
                    <Text style={{ fontWeight: '700', fontStyle: 'normal', fontSize: 14, lineHeight: 28 }}>{orders}</Text>
                    <Text style={{ color: '#696969', fontWeight: '700', fontStyle: 'normal', fontSize: 14, lineHeight: 28 }}>Total Orders</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        marginBottom: 24,
        overflow: "hidden",
        borderColor: "#ededed",
        //borderWidth: 1.5,
        elevation: 8,
        backgroundColor: "#fff",
        marginLeft: 16,
        marginRight: 16
    },
    image: {

    },
    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 16,
    },
    sliderImage: {
        height: '100%',
        width: "100%",
        alignSelf: 'center',
        borderRadius: 16,
    },
});

export default StoreCard;