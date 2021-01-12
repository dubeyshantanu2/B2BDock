import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function AboutCard () {
    return(
        <View style={styles.card}>
            <View style={{marginTop: 40, marginBottom: 35, alignItems: 'center'}}>
                <Text style={{fontWeight: '700', fontStyle: 'normal', fontSize: 20, lineHeight: 27}}>About Retailer</Text>
                <View style={{padding: 16 }}>
                    <Text style={{fontWeight: '400', fontStyle: 'normal', fontSize: 16, lineHeight: 32, top: 20}}>Retail is the process of selling consumer goods or services to customers through multiple channels of distribution to earn a profit. Retailers satisfy demand identified through a supply chain.</Text>
                </View>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    card: {
        borderRadius: 16,
        marginBottom: 24,
        overflow: "hidden",
        borderColor: "#ededed",
        borderWidth: 1.5, 
    },
});
export default AboutCard;