import React from 'react';
import { View, StyleSheet } from 'react-native';

function Call({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                This Call screen is under construction
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

export default Call;