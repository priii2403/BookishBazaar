import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index'
import User from '../screens/User/Index';
import Category from '../screens/Category/Index';
import MyBooks from '../screens/MyBooks/Index';
import Post from '../screens/Post/Index';

const Tab = createBottomTabNavigator();
export default function BottonTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'red',
          tabBarActiveTintColor: '#58ceb2',
          tabBarInactiveTintColor: 'gray',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="MyBooks" component={MyBooks} />
    </Tab.Navigator>
  );
}
