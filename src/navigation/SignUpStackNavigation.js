import {View, Text} from 'react-native';
import React from 'react';
import Login from '../screens/Login/Index';
import SignUp from '../screens/SignUp/Index';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function SignUpStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}
