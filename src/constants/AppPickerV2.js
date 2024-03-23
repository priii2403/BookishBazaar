import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Menu} from 'react-native-paper';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import { FONT_SIZE } from './utils/index';
import Metrics from '../Themes/Metrics';
import { Fonts } from '../Themes/AppTheme';


const AppPickerV2 = props => {
  const {
    showMenu,
    toggleMenu,
    label,
    items,
    value,
    handlePress,
    leftIcon,
    rightIcon,
    valueExtractor,
    placeholderText,
    valueAppt,
    valueApptTime,
    titleStyle,
    style,
    menuStyle,
    fieldLoader,
    user,
  } = props;

  const renderTitle = item => {
    return  item;
  };

  return (
    <View style={{marginRight: Metrics.rfv(10), ...style}}>
      <Text style={styles.topText}>{label}</Text>
      <Menu
        visible={showMenu}
        onDismiss={toggleMenu}
        anchor={
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.chipContainer}
            onPress={toggleMenu}>
            {leftIcon ? (
              <IconMaterial
                name={leftIcon}
                size={Metrics.rfv(15)}
                color={colors.greyTheme1}
                style={styles.mleft5}
              />
            ) : null}
            <Text style={{...styles.chipText, ...titleStyle}}>
              {value?.length
                ? value === 'None'
                  ? placeholderText
                  : value
                : items?.length
                  ? placeholderText
                  : 'No items'}
            </Text>
            {rightIcon ? (
              <IconMC
                name={'clock-outline'}
                size={Metrics.rfv(18)}
                color={colors.greyTheme1}
                style={styles.mHorizontal5}
              />
            ) : (
              <IconMaterial
                name={'keyboard-arrow-down'}
                size={Metrics.rfv(16)}
                color={colors.greyTheme1}
                style={styles.mHorizontal5}
              />
            )}

            {fieldLoader && (
              <ActivityIndicator
                size={Metrics.rfv(10)}
                color={colors.mainTheme1}
                style={styles.marginRight5}
              />
            )}
          </TouchableOpacity>
        }>
        {items?.map((item, index) => {
          return (
            <View key={index.toString()} style={styles.pipelineView}>
              {/* {leftIcon ? (
                <IconMaterial
                  name={getTaskTypeIcon(item?.icon)}
                  size={Metrics.rfv(15)}
                  color={colors.greyTheme1}
                  style={styles.mLeft10}
                />
              ) : null} */}
              <Menu.Item
                style={styles.menuItem}
                titleStyle={{
                  ...styles.menuTitle,
                  ...menuStyle,
                }}
                key={index.toString()}
                onPress={() => handlePress(item)}
                title={renderTitle(item)}
              />
            </View>
          );
        })}
      </Menu>
    </View>
  );
};

export default AppPickerV2;

const styles = StyleSheet.create({
  mleft5: {
    marginLeft: Metrics.rfv(5),
  },
  mHorizontal5: {
    marginHorizontal: Metrics.rfv(5),
  },
  mLeft10: {
    marginLeft: Metrics.rfv(10),
  },
  topText: {
    color: colors.greyTheme2,
    fontSize: FONT_SIZE.small,
    fontFamily: Fonts.Roboto400,
    marginBottom: Metrics.rfv(7),
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Metrics.rfv(5),
    marginRight: Metrics.rfv(10),
    backgroundColor: colors.white,
    borderWidth: Metrics.rfv(0.5),
    borderColor: colors.greyTheme2,
  },
  marginRight5: {
    marginRight: Metrics.rfv(5),
  },
  chipText: {
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto400,
    marginLeft: Metrics.rfv(5),
    marginVertical: Metrics.rfv(5),
    textTransform: 'capitalize',
    color: colors.greyTheme1,
  },
  menuTitle: {
    color: colors.blackAccent,
    fontFamily: Fonts.Roboto400,
    fontSize: FONT_SIZE.small_medium,
    textTransform: 'capitalize',
  },
  menuItem: {
    paddingRight: Metrics.rfv(10),
    paddingVertical: 0,
    height: Metrics.rfv(35),
  },
  pipelineView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
