import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

function ClientList({ image, name }) {

    return (
        <View style={{ marginTop: 10, height: 125 }}>
            <Pressable style={{ flexDirection: "row", height: 100, justifyContent: "space-between", alignItems: "center", width: "88%", borderColor: "#e10000", borderWidth: 3, borderRadius: 40, left: "36%" }}>
                <Image
                    source={image}
                    style={{ height: 84, width: 84, borderRadius: 40, borderWidth: 3, borderColor: "red", right: 42 }} />
                <View style={{ right: "25%" }} >
                    <Text style={{ fontWeight: "bold", fontSize: 15, lineHeight: 14 }}>{name}</Text>
                    <Text style={{ fontWeight: "400", fontSize: 12, lineHeight: 14, color: "#bfbfbf", marginTop: 5 }}>Friend Request</Text>
                </View>
                <View style={{ flexDirection: "row", top: "50%", right: "10%" }}>
                    <View style={{ borderRadius: 14, borderWidth: 1.5, borderColor: "#d09ede", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", padding: 12, right: 10 }}>
                        <Icon name="chatbubble" size={30} color={"#d09ede"} />
                    </View>
                    <View style={{ borderRadius: 14, borderWidth: 1.5, borderColor: "#00A015", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", padding: 12, }}>
                        <Icon name="call" size={30} color={"#00A015"} />
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default ClientList;