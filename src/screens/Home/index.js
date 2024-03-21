import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Index(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => props.navigation.navigate('User')}>
        <Text>This is home</Text>
      </TouchableOpacity>
    </View>
  );
}
