import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Onboarding from './app/screens/Onboarding';
import LoginScreen from './app/screens/LoginScreen';
import RetailerHome from './app/screens/RetailerHome';

export default class App extends Component {
  render() {
    return <RetailerHome />;
  }
}
