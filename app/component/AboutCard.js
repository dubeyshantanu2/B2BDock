import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function AboutCard({ about }) {
    return (
        <View style={styles.card}>
            <View style={{ marginTop: 40, marginBottom: 35, alignItems: 'center' }}>
                <Text style={{ fontWeight: '700', fontStyle: 'normal', fontSize: 20, lineHeight: 27 }}>About Retailer</Text>
                <View style={{ padding: 16, }}>
                    <Text style={{ fontWeight: '400', fontStyle: 'normal', fontSize: 16, lineHeight: 32, top: 20 }}>{about}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {

        overflow: "hidden",

    },
});
export default AboutCard;