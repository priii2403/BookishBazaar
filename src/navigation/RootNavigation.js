import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import BottonTabNavigation from './BottonTabNavigation';
import LoginScreen from '../screens/LoginScreen/Index'
import SignUp from '../screens/SignUp/Index'
export default function RootNavigation() {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <SignUp/> */}
      <LoginScreen/>
      {/* <BottonTabNavigation /> */}
    </NavigationContainer>
  );
}
