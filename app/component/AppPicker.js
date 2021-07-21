import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Modal, FlatList, Button } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import PickerItem from "./PickerItem";
import AppButton from "./AppButton";

function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 25, height: 50, justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alingItems: "center", marginLeft: "4%" }}>
                        {icon && (
                            <Icon style={{ marginLeft: "4%", marginRight: "8%" }}
                                name={icon}
                                size={20}
                            />
                        )}

                        {selectedItem ? (
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{selectedItem.label}</Text>
                        ) : (
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{placeholder}</Text>
                        )}
                    </View>

                    <Icon style={{ marginRight: "4%" }}
                        name="chevron-down"
                        size={20}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">

                <View style={{ marginTop: "4%" }}>
                    <FlatList
                        data={items}
                        keyExtractor={items => items.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </View>
                <View style={{ margin: "4%" }}>
                    <AppButton title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </>
    );
}

export default AppPicker;