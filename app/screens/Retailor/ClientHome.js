import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';

import ClientList from "../../component/ClientList";

const Client = [
    {
        id: 1,
        name: "Alex Trainer",
        image: require("../../image/portrait1.jpg"),
    },
    {
        id: 2,
        name: "Ram Prakash",
        image: require("../../image/Rectangle459.png"),
    },
    {
        id: 3,
        name: "Shantanu Dubey",
        image: require("../../image/Rectangle460.png"),
    },
    {
        id: 4,
        name: "Ronaldo Singh",
        image: require("../../image/Rectangle461.png"),
    },
    {
        id: 5,
        name: "Ram",
        image: require("../../image/Rectangle469.png"),
    },
    {
        id: 6,
        name: "Ram Prakash",
        image: require("../../image/Rectangle459.png"),
    },
    {
        id: 7,
        name: "Ram Prakash",
        image: require("../../image/Rectangle459.png"),
    },
]

export default class ClientHome extends Component {

    state = {
        modalVisible: false,
        toggle: true,
        toggle2: false,
        toggle3: false,
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    _onPress() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress2() {
        const newState2 = !this.state.toggle2;
        this.setState({ toggle2: newState2 })
    }
    _onPress3() {
        const newState3 = !this.state.toggle3;
        this.setState({ toggle3: newState3 })
    }

    render() {

        const { modalVisible } = this.state;
        const { toggle } = this.state;
        const { toggle2 } = this.state;
        const { toggle3 } = this.state;
        const buttonBg = toggle ? "#ccf2f4" : "#fff"
        const buttonBg2 = toggle2 ? "#ccf2f4" : "#fff"
        const buttonBg3 = toggle3 ? "#ccf2f4" : "#fff"

        return (

            <View style={{ margin: "4%" }}>

                <View style={{ marginTop: "4%", marginBottom: "4%" }}>

                    <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => this.props.navigation.navigate('AddClient')}>
                        <Text style={styles.textStyle}>Add Customer</Text>
                    </Pressable>
                </View>


                <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "stretch", width: "80%", marginTop: "4%", marginBottom: "4%" }}>

                    <Text style={{ fontWeight: "400", fontSize: 12, lineHeight: 18, color: "#626365", padding: 10 }}>Filter by</Text>

                    <TouchableOpacity onPress={() => this._onPress()} style={{ padding: 10, backgroundColor: buttonBg, borderRadius: 8 }}>
                        <Text style={{ fontWeight: "400", fontSize: 12, lineHeight: 18, color: "#626365" }}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this._onPress2()} style={{ padding: 10, backgroundColor: buttonBg2, borderRadius: 8 }}>
                        <Text style={{ fontWeight: "400", fontSize: 12, lineHeight: 18, color: "#626365" }}>New Customers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._onPress3()} style={{ padding: 10, backgroundColor: buttonBg3, borderRadius: 8 }} >
                        <Text style={{ fontWeight: "400", fontSize: 12, lineHeight: 18, color: "#626365" }}>Blocked</Text>
                    </TouchableOpacity>

                </View>

                <FlatList
                    data={Client}
                    keyExtractor={Client => Client.id.toString()}
                    renderItem={({ item }) => (
                        <ClientList
                            image={item.image}
                            name={item.name}
                        />
                    )}
                    ItemSeparatorComponent={() =>
                        <View style={{ width: "100%", height: 10 }} />}
                    ListHeaderComponent={this.Render_FlatList_Sticky_header}
                    stickyHeaderIndices={[]}
                />
            </View >

        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        //   padding: 35,
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"

    },
    buttonOpen: {
        backgroundColor: "#3E4491",
    },
    buttonClose: {
        backgroundColor: "#4136F1",
        width: "90%",
        height: 60
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        paddingBottom: 35
    }
});