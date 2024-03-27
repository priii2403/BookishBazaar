import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {logout} from '../../reduxToolkit/authSlice';
import {useDispatch} from 'react-redux';

export default function Index() {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My book screen</Text>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => dispatch(logout())}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
