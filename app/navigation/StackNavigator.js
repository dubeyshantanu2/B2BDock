import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";

import RetailorHome from "../screens/Retailor/RetailorHome";
import RetailorProfile from "../screens/Retailor/RetailorProfile";
import CartScreen from "../screens/Retailor/CartScreen";
import EditProfile from "../screens/Retailor/EditProfile";
import ProductScreen from "../screens/Retailor/ProductScreen";
import Variations from "../screens/Retailor/Variation";
import Filter from "../screens/Retailor/Filter";
import MyOrder from "../screens/Retailor/MyOrder";
import ClientHome from "../screens/Retailor/ClientHome";
import SelectOutlet from "../screens/Retailor/SelectOutlet";
import SearchScreen from "../screens/Retailor/SearchScreen";
import AddClient from "../screens/Retailor/AddClient";
import Message from "../screens/Retailor/Message";
import Call from "../screens/Retailor/Call";

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createStackNavigator();

const HomeNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={{
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>

    <Stack.Screen name="Select Outlet" component={SelectOutlet}
      options={{ headerShown: false }}>
    </Stack.Screen>

    <Stack.Screen name="Home" component={RetailorHome} options={{
      title: 'Home',
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon.Button name="ios-menu" size={30} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        </View>
      ),
      headerRight: () => (
        <Icon.Button name="cart-outline" size={25} color="#000"
          backgroundColor="#fff" onPress={() => navigation.navigate('Cart')}>
        </Icon.Button>
      ),
    }} />

    <Stack.Screen name="Profile" component={RetailorProfile} options={{
      title: 'Profile',
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon.Button name="ios-menu" size={30} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>

          <Icon.Button name="cart-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate('Cart')}>
          </Icon.Button>
          <Icon.Button name="search-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate("Search")}>
          </Icon.Button>

        </View>
      ),
    }} />

    <Stack.Screen name="Cart" component={CartScreen} options={{
      title: 'Cart',
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon.Button name="ios-menu" size={30} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>

        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>


          <Icon.Button name="search-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate("Search")}>
          </Icon.Button>

        </View>
      ),
    }} />

    <Stack.Screen name="EditProfile" component={EditProfile} options={{
      title: 'Edit Profile'
    }}></Stack.Screen>

    <Stack.Screen name="Product" component={ProductScreen} options={{
      gestureDirection: "horizontal",
      headerTitle: false,
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon.Button name="ios-menu" size={30} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>

          <Icon.Button name="cart-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate('Cart')}>
          </Icon.Button>
          <Icon.Button name="search-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate("Search")}>
          </Icon.Button>

        </View>
      ),
    }}></Stack.Screen>

    <Stack.Screen name="Variation" component={Variations} options={{
      title: 'Variation',
      gestureDirection: "horizontal",
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon.Button name="ios-menu" size={30} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>

          <Icon.Button name="cart-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate('Cart')}>
          </Icon.Button>
          <Icon.Button name="search-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate('Search')}>
          </Icon.Button>

        </View>
      ),
    }}></Stack.Screen>

    <Stack.Screen name="Filter" component={Filter} option={{
      title: 'Filter'
    }}></Stack.Screen>

    <Stack.Screen name="Order" component={MyOrder} options={{
      title: 'My Orders',
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon.Button name="ios-menu" size={30} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        </View>
      ),
    }} />

    <Stack.Screen name="ClientHome" component={ClientHome} options={{
      title: 'Client',
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon.Button name="ios-menu" size={30} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>

          <Icon.Button name="cart-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.navigate('Cart')}>
          </Icon.Button>
          <Icon.Button name="search-outline" size={25} color="#000"
            backgroundColor="#fff" onPress={() => navigation.openDrawer()}>
          </Icon.Button>

        </View>
      ),
    }} />

    <Stack.Screen name="Search" component={SearchScreen} options={{
      title: 'Search',
      cardStyleInterpolator: forFade,
    }} />

    <Stack.Screen name="AddClient" component={AddClient} options={{
      title: 'Add Client Details'
    }} />

    <Stack.Screen name="Message" component={Message} options={{
      title: 'Messages'
    }} />

    <Stack.Screen name="Call" component={Call} options={{
      title: 'Call'
    }} />

  </Stack.Navigator>
);

export default HomeNavigator;