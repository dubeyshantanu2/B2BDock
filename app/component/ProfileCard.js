import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

function ProfileCard( {image, title, type, outlet, name, gst}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.deatils}>
                <Text style={{marginBottom: 30, fontWeight: '700', fontStyle: 'normal', fontSize: 24, lineHeight: 35.25}}>{title}</Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{color:"#444EED"}}>Get Certified With B2BDock </Text>
                    <Text style={styles.text}>{type}</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{color:"#696969"}}>Outlet name: </Text>
                    <Text style={styles.text}>{outlet}</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{color:"#696969"}}>Retailer name: </Text>
                    <Text style={styles.text}>{name}</Text>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 30}}>
                    <Text style={{color:"#696969"}}>GST: </Text>
                    <Text style={styles.text}>{gst}</Text>
                </View>
                <TouchableOpacity >
                <View style={styles.button}>
                    <Text style={{color: "#ffffff"}}>Edit Profile</Text>
                </View>
                </TouchableOpacity>
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
        borderWidth: 1.5
    },
    image: {
        height: 200,
        width: "100%",
    },
    deatils: {
        paddingTop: 16,
        paddingBottom: 40,
        alignItems: 'center'
    },
    text: {
        marginBottom:7,
        fontWeight: '500', 
        fontSize: 14, 
        fontStyle: 'normal', 
        lineHeight: 21,
    },
    button: {
        backgroundColor: "#444eed",
        marginBottom: 25,
        alignItems: 'center',
        paddingHorizontal: 74,
        paddingVertical: 9,
        borderRadius: 16,

    },
});

export default ProfileCard;