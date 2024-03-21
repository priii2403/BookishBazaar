import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import BottonTabNavigation from './BottonTabNavigation';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <BottonTabNavigation />
    </NavigationContainer>
  );
}
