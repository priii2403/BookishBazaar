import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Index';
import User from '../screens/User/Index';
import Category from '../screens/Category/Index';
import MyBooks from '../screens/MyBooks/Index';
import Post from '../screens/Post/Index';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Metrics from '../Themes/Metrics';
import {Fonts, FONT_SIZE} from '../Themes/AppTheme';
import colors from '../constants/colors/index';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{marginTop: -40, justifyContent: 'center', alignItems: 'center'}}
    onPress={onPress}>
    <View
      style={{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#1A8BF5',
        borderWidth: 5,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        ...style.shadow1,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottonTabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {display: 'none'},
      tabBarStyle: {
        showLabel: false,
        tabBarActiveTintColor: colors.primary_dark,
        tabBarInactiveTintColor: 'gray',
        borderRadius: 15,
        height: 90,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <IconMaterial name={'home'} size={Metrics.rfv(25)} />
            <Text
              style={{
                color: focused ? colors.primary : colors.black,
                fontFamily: Fonts.Roboto400,
                fontSize: FONT_SIZE.small,
              }}>
              Home
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={User}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <IconMaterial name={'person'} size={Metrics.rfv(25)} />
            <Text
              style={{
                color: focused ? '#1A8BF5' : colors.black,
                fontSize: FONT_SIZE.small,
                fontFamily: Fonts.Roboto400,
              }}>
              User
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Add Book Details"
      component={Post}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 0}}>
            <Icon name={'plus'} size={Metrics.rfv(30)} />
          </View>
        ),
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}
    />
    <Tab.Screen
      name="Category"
      component={Category}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image
              source={require('../Assets/category.webp')}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
            <Text
              style={{
                color: focused ? '#1A8BF5' : colors.black,
                fontFamily: Fonts.Roboto400,
                fontSize: FONT_SIZE.small,
              }}>
              Category
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="MyBooks"
      component={MyBooks}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Icon name={'bookshelf'} size={Metrics.rfv(25)} />
            <Text
              style={{
                color: focused ? '#1A8BF5' : colors.black,
                fontFamily: Fonts.Roboto400,
                fontSize: FONT_SIZE.small,
              }}>
              MyBooks
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#oooo',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  shadow1: {
    shadowColor: '#f7f7f9',
    // 0px 5px 15px;
  },
});

export default BottonTabNavigation;
