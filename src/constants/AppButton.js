import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';
import Metrics from '../Themes/Metrics';
import colors from './colors/index';

const AppButton = props => {
  const {text, onPress, disabled, isLoading} = props;
console.log(text)
  return (
    <View
      style={
   
{     backgroundColor: colors.logoTheme1,
  ...styles.container,
  ...props.style,}
      
      }>
        <TouchableOpacity
        onPress={onPress}
        disabled={disabled || isLoading}
        style={styles.btnContainer}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={Colors.white} />
        ) : (
          <Text style={{...styles.buttonText, ...props.textStyle}}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.rfv(40),
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.rfv(35),
    borderRadius: Metrics.rfv(5),
    backgroundColor:'pink'
  },
  btnContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  buttonText: {
    color: colors.white,
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto400,
  },
});
export default AppButton;