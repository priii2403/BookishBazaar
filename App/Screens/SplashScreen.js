import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
  } from 'react-native';
import React from 'react'
import { Colors, Fonts } from '../Themes/AppTheme';
import Metrics from '../Themes/Metrics';
import FastImage from 'react-native-fast-image';
const SplashScreen = () => {
  return (
    <View style={styles.mainScreen}>
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      {/* <FastImage
        source={require('../Assets/Media/CustomIcons/logos/logo_animation.gif')}
        style={styles.logo}
        resizeMode={'contain'}
      /> */}
    </View>
    <TouchableOpacity
    //   onPress={handleLogout}
      style={styles.logoutView}
    //   disabled={logoutLoading}
      >
      {/* {logoutLoading ? (
        <ActivityIndicator
          size={Metrics.rfv(18)}
          color={Colors.greyTheme1}
          style={styles.mRight5}
        />
      ) : (
        <IconMC
          name={'power'}
          color={Colors.greyTheme1}
          size={Metrics.rfv(18)}
        />
      )} */}
      <Text style={styles.filterText}>Logout</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.white,
    },
    logoutView: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: Metrics.rfv(20),
      marginRight: Metrics.rfv(20),
      alignItems: 'center',
    },
    filterText: {
      color: Colors.greyTheme1,
      fontFamily: Fonts.Roboto500,
    },
    mainScreen: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    mRight5: {
      marginRight: Metrics.rfv(5),
    },
    logo: {
      height: Metrics.rfv(180),
      width: Metrics.width,
    },
  });
  
export default SplashScreen