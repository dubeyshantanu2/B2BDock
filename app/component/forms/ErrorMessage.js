import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;
    return (
        <Text style={{ color: "#e00000", fontWeight: "bold", marginTop: "2%" }}>{error}</Text>
    )
}

export default ErrorMessage;