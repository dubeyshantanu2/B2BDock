import React from 'react'
import { TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 25, width: "100%", marginTop: "4%", justifyContent: "flex-start", alignItems: "center" }}>
            {icon && <Icon name={icon} size={20} color={"#000"} style={{ marginLeft: "4%" }} />}
            <TextInput style={{ fontSize: 18, color: "#000", width: "85%", marginLeft: "4%" }} {...otherProps} />
        </View>
    );
}

export default AppTextInput;