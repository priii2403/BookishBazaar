import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigation from './HomeStackNavigation';
import BottonTabNavigation from './BottonTabNavigation';
import Login from '../screens/Login/Index';
import SignUp from '../screens/SignUp/Index';
import SignUpStackNavigation from './SignUpStackNavigation';
const userLogin = false;
export default function RootNavigation() {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <BottonTabNavigation /> */}
      {/* <HomeStackNavigation /> */}
      {userLogin ? <SignUpStackNavigation /> : <BottonTabNavigation />}
    </NavigationContainer>
  );
}
