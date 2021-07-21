import React, { useEffect, useState } from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

import OnboardingScreen from '../screens/Welcome/OnboardingScreen';
import LoginScreen from '../screens/Welcome/LoginScreen';
import LoginScreen1 from '../screens/Welcome/LoginScreen1';
import RegisterScreen from '../screens/Welcome/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    if (isFirstLaunch == null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName} screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
        }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
            <Stack.Screen name="Login1" component={LoginScreen1} options={{ header: () => null }} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ header: () => null }} />
        </Stack.Navigator>
    );
};

export default AuthNavigation;
