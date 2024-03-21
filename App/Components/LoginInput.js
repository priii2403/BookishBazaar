import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';

// import SvgIcon from './SvgIcon';

import ErrorText from './ErrorText';
import Metrics from '../Themes/Metrics';
import { Colors ,FONT_SIZE,Fonts} from '../Themes/AppTheme';

const LoginInput = props => {
  const {
    onChangeText,
    onBlur,
    value,
    iconName,
    rightIcon,
    keyboardType,
    name,
    placeholder,
    secureTextEntry,
    onHidePress,
    hidePass,
    onFocus,
    errors,
    touched,
  } = props;
  return (
    <View style={{marginBottom: rightIcon ? 0 : Metrics.rfv(10)}}>
      <Text style={styles.labelText}>{placeholder}</Text>
      <View style={styles.inputContainer}>
        {/* <SvgIcon
          name={iconName}
          style={{marginHorizontal: Metrics.rfv(10)}}
          w={20}
          h={20}
        /> */}
        <View style={styles.container}>
          <TextInput
            name={name}
            placeholder={placeholder}
            placeholderTextColor={Colors.greyTheme1}
            onChangeText={onChangeText}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={keyboardType ? keyboardType : 'default'}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
            style={styles.textInputStyle}
            cursorColor={Colors.dasboardStates.blue}
          />
          {/* {rightIcon ? (
            <TouchableOpacity
              onPress={onHidePress}
              style={styles.rightIconView}>
              {!hidePass ? (
                // <SvgIcon
                //   name={'cLPreview'}
                //   style={styles.eyeIcon}
                //   w={20}
                //   h={20}
                // />
              ) : (
                // <SvgIcon
                //   name={'cLPreviewHide'}
                //   style={styles.eyeIcon}
                //   w={23}
                //   h={23}
                // />
              )}
            </TouchableOpacity>
          ) : null} */}
        </View>
      </View>

      {errors && touched ? <ErrorText errorMsg={errors} /> : null}
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Metrics.rfv(10),
    borderColor: Colors.greyTheme4,
    borderWidth: Metrics.rfv(1),
    height: Metrics.rfv(40),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  labelText: {
    fontFamily: Fonts.Roboto400,
    fontSize: FONT_SIZE.small,
    color: Colors.black,
    marginBottom: Metrics.rfv(7),
    // marginRight:Metrics.rfv(10)
    // backgroundColor:"pink"
  },
  rightIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: Metrics.rfv(10),
  },
  textInputStyle: {
    flex: 1,
    marginRight: Metrics.rfv(5),
    fontFamily: Fonts.Roboto400,
    fontSize: FONT_SIZE.small,
    color: Colors.black,

            marginLeft:Metrics.rfv(10)

  },
  eyeIcon: {
    marginLeft: !Platform.isPad ? 0 : Metrics.rfv(10),
  },
});
