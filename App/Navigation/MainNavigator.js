import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import {NavigationContainer, useTheme} from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import { Colors } from '../Themes/AppTheme';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import HomeScreen from '../Screens/Login/HomeScreen';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const SplashNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{animationEnabled: false, headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={HomeScreen} />
      </Stack.Navigator>
    );
  };
const MainNavigator = () => {
  return (
    <NavigationContainer >
    { true ? (
      // <SplashNavigator />
      <TabNavigator/>
    ) : !!isAuthenticated && !isLogout && !hardRestriction ? (
      <MainDrawerNavigator />
    ) : (
      <AuthNavigator />
    )}
    <Toast
      ref={ref => {
        global.universalToast = ref;
      }}
      style={styles.toastMsg}
      position="top"
      positionValue={100}
      fadeInDuration={550}
      fadeOutDuration={550}
      opacity={1}
      textStyle={Colors.white}
    />
  </NavigationContainer>
);
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    stack: {
      flex: 1,
    },
    drawerStyles: {
      flex: 1,
      backgroundColor: Colors.transparent,
      width: '70%',
    },
    toastMsg: {
      backgroundColor: Colors.transparent,
      padding: 0,
      margin: 0,
    },
  });
export default MainNavigator