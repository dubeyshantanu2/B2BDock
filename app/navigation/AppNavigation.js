import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeNavigator from "./StackNavigator";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();

const AppNavigation = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Main" component={HomeNavigator} />

    </Drawer.Navigator>
)

export default AppNavigation;