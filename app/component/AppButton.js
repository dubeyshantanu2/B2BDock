import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

function AppButton({ title, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: "100%",
        backgroundColor: "#444eed",
        borderRadius: 40,
    },
});
export default AppButton;