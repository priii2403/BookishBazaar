import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Login/HomeScreen';
import Setting from '../Screens/Setting';
import ChatScreen from '../Screens/ChatScreen';
import ContactScreen from '../Screens/ContactScreen';

import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import AddCard from '../Screens/AddCard';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  console.log('insideee');
  return (
    <TouchableOpacity
      style={{
        marginTop: -30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          ...style.shadow,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarStyle: {
            // backgroundColor: 'red',
            tabBarActiveTintColor: '#58ceb2',
            tabBarInactiveTintColor: 'gray',
            position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffff',
          borderRadius: 15,
          height: 90,
          ...style.shadow,
          },
     
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../Assets/1.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                  Home
                </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../Assets/1.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                Settings
                </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddCard"
        component={AddCard}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../Assets/1.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton {...props} /> // Corrected the way to return your custom tab bar button
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../Assets/1.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              {/* <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                chats
              </Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../Assets/1.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                ContactScreen
                </Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#oooo',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default TabNavigator;
