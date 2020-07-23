import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './Components/MainScreen.js'

const AppStackNavigator = createStackNavigator({
  Main: {screen: MainScreen} //MainScreen 등록
})

export default createAppContainer(AppStackNavigator);


const styles = StyleSheet.create({});

