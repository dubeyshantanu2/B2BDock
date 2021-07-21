import React from 'react';
import { View, StyleSheet } from 'react-native';

function Message({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                This Message screen is under construction
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})

export default Message;