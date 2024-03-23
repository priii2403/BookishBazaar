import React from 'react';
import {useTheme} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import Metrics from '../Themes/Metrics';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';
// import Metrics from '../Themes/Metrics';

const ButtonsRow = props => {
  const {colors} = useTheme();
  return (
    <View style={{...styles.btnContainer, ...props.style}}>
      <TouchableOpacity
        disabled={props.disable || props.loading}
        style={{
          ...styles.applyContainer,
          backgroundColor: props.disable
            ? Colors.background
            : colors.primary,
        }}
        onPress={props.onPressOne}>
        {props.loading ? (
          <ActivityIndicator
            style={styles.loader}
            size={'small'}
            color={props.disable ? Colors.greyTheme1 : Colors.white}
          />
        ) : null}
        <Text
          style={{
            ...styles.btnText,
            color: props.disable ? Colors.greyTheme1 : Colors.white,
          }}>
          {props.btnTextOne}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={props.loading}
        style={styles.cancelContainer}
        onPress={props.onPressTwo}>
        <Text
          style={{
            ...styles.btnText,
            color: colors.mainTheme1,
          }}>
          {props.btnTextTwo}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.rfv(20),
    marginBottom: Metrics.rfv(20),
  },
  btnText: {
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto500,
    paddingVertical: Metrics.rfv(5),
    paddingHorizontal: Metrics.rfv(15),
  },
  applyContainer: {
    height: Metrics.rfv(30),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainTheme2,
    borderRadius: Metrics.rfv(5),
    marginHorizontal: Metrics.rfv(5),
  },
  cancelContainer: {
    height: Metrics.rfv(30),
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: Metrics.rfv(1),
    borderColor: Colors.mainTheme1,
    borderRadius: Metrics.rfv(5),
    marginRight: Metrics.rfv(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginLeft: Metrics.rfv(10),
    marginRight: Metrics.rfv(-5),
  },
});
export default ButtonsRow;
