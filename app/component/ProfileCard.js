import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback, Modal, Button } from 'react-native';

import AppButton from "../component/AppButton";

function ProfileCard({ image, title, type, name, gst, onPress }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.deatils}>
                <Text style={{ marginBottom: 30, fontWeight: '700', fontStyle: 'normal', fontSize: 24, lineHeight: 35.25 }}>{title}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                        <Text style={{ color: "#444EED" }}>Get Certified With B2BDock </Text>
                    </TouchableWithoutFeedback>
                    <Modal visible={modalVisible} animationType="slide">
                        <View style={{ margin: "4%" }}>
                            <Text style={{ marginTop: 60, fontSize: 20, fontWeight: "bold" }}>Fill up the form to get certified.</Text>
                            <View style={{ marginTop: 60 }}>
                                <AppButton title="Done" onPress={() => setModalVisible(false)} />
                            </View>
                        </View>
                    </Modal>
                    <Text style={styles.text}>{type}</Text>
                </View>



                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#696969" }}>Retailer name: </Text>
                    <Text style={styles.text}>{name}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <Text style={{ color: "#696969" }}>GST: </Text>
                    <Text style={styles.text}>{gst}</Text>
                </View>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={styles.button}>
                        <Text style={{ color: "#ffffff" }}>Edit Profile</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        marginBottom: 24,
        overflow: "hidden",
        borderColor: "#ededed",
        //borderWidth: 1.5,
        elevation: 7,
        backgroundColor: "#fff",
        marginLeft: "4%",
        marginRight: "4%"
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
        marginBottom: 7,
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