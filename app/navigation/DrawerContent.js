import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Drawer, Title } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";

export function DrawerContent({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}>
                            <Avatar.Image
                                source={require("../image/portrait1.jpg")}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                <Title>Shantanu Dubey</Title>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => navigation.navigate('Home')}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Brands"
                            nPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Profile"
                            onPress={() => navigation.navigate('Profile')}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="grid-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Brands"
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="pricetags-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Orders"
                            onPress={() => navigation.navigate("Order")}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="folder-open-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Catalouge"
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="happy-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Clients"
                            onPress={() => navigation.navigate("ClientHome")}
                        />


                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="help-circle-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Help & Support"
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={StyleSheet.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="log-in-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preferences: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});