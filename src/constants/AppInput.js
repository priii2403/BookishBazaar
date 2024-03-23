import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../Themes/AppTheme';

import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/Ionicons';
import Metrics from '../Themes/Metrics';
import { FONT_SIZE } from './utils/index';

const AppInput = props => {
  return (
    <View
      style={{
        ...styles.inputContainer,
        ...props.style,
        marginTop: Metrics.rfv(10),
      }}>
      {props.label && <Text style={styles.topText}>{props.label}</Text>}

      <View style={styles.flexRow}>
        <TextInput
          name={props.label}
          value={props.value}
          onChangeText={props.setValue}
          autoCorrect={false}
          autoCapitalize={'none'}
          editable={props.editable}
          placeholderTextColor={Colors.greyTheme1}
          style={{
            ...styles.textInput,
            ...props.style,
            width: props.rightIcon || props.rightCloseIcon ? '95%' : '100%',
            color:
              props.editable === undefined || props.editable === true
                ? Colors.black
                : Colors.greyTheme2,
          }}
          multiline={props.multiline ? props.multiline : true}
          autoFocus={props.autoFocus ? props.autoFocus : false}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          {...props}
        />

        {props.rightIcon ? (
          <TouchableOpacity
            onPress={props.onPress}
   >
            {props.rightIcon === 'search' ? (
              <IconMaterial
                name={props.rightIcon}
                size={Metrics.rfv(20)}
                color={Colors.greyTheme1}
                style={{
                  marginLeft:
                    props.fromModal === true ? Metrics.rfv(-3) : Metrics.rfv(0),
                }}
              />
            ) : (
              <IconMC
                name={props.rightIcon}
                size={Metrics.rfv(20)}
                color={Colors.greyTheme1}
                style={{
                  marginLeft:
                    props.fromModal === true ? Metrics.rfv(-3) : Metrics.rfv(0),
                }}
              />
            )}
          </TouchableOpacity>
        ) : null}
        {props.rightCloseIcon ? (
          <TouchableOpacity
            onPress={props.onClosePress}
            style={{height: Metrics.rfv(20)}}
         >
            <IconMC
              name={props.rightCloseIcon}
              size={Metrics.rfv(20)}
              color={Colors.greyTheme1}
              style={{paddingLeft: Metrics.rfv(10)}}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  topText: {
    color: Colors.greyTheme2,
    fontSize: FONT_SIZE.small,
    fontFamily: Fonts.Roboto400,
  },
  inputContainer: {
    paddingHorizontal: Metrics.rfv(0),
    justifyContent: 'center',
    borderBottomWidth: Metrics.rfv(1),
    borderBottomColor: Colors.background,
    minHeight: Metrics.rfv(50),
    backgroundColor: Colors.white,
    marginHorizontal: Metrics.rfv(20),
    fontSize: FONT_SIZE.small_medium,
    paddingBottom: Metrics.rfv(3),
  },
  textInput: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    color: Colors.black,
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto400,
  },
});

export default AppInput;
