import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottonTabNavigation from './BottonTabNavigation';
import SignUpStackNavigation from './SignUpStackNavigation';
import {useSelector} from 'react-redux';
const userLogin = true;
export default function RootNavigation() {
  const {isAuthenticated} = useSelector(state => state.auth);
  console.log('is====', isAuthenticated);
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <BottonTabNavigation /> */}
      {/* <HomeStackNavigation /> */}
      {!isAuthenticated ? <SignUpStackNavigation /> : <BottonTabNavigation />}
    </NavigationContainer>
  );
}
