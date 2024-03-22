import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/index';
import User from '../screens/User/Index'
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
