import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Fonts } from '../Themes/AppTheme';
// import {Colors, FONT_SIZE, Fonts} from '../../Themes/AppTheme';
import Metrics from '../Themes/Metrics';
import colors from './colors/index';
import { FONT_SIZE } from './utils/index';

const ErrorText = props => {
  const {errorMsg} = props;
  return <Text style={{...styles.errorText, ...props.style}}>{errorMsg}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: FONT_SIZE.small,
    marginTop: Metrics.rfv(5),
    color: colors.errorText,
    fontFamily: Fonts.Roboto400,
  },
});
export default ErrorText;
