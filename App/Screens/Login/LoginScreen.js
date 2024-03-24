import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {Colors, FONT_SIZE, Fonts} from '../../Themes/AppTheme';
import {Formik} from 'formik';

import Metrics from '../../Themes/Metrics';
import {loginValidationSchema} from '../../Helpers/Validator';
// import {useDispatch} from 'react-redux';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
// import Clipboard from '@react-native-clipboard/clipboard';
// import messaging from '@react-native-firebase/messaging';
import {showMessage} from '../../store/actions';
import FastImage from 'react-native-fast-image';

// import {login} from '../../store/AppStore/auth/actions';
// import AppButton from '../../Components/AppButton';
// import LoginInput from '../../Components/LoginInput';
import AppButton from '../../../src/constants/AppButton';
import colors from '../../../src/constants/colors/index';
import LoginInput from '../../../src/constants/LoginInput';

const LoginScreen = () => {

  const [isLoading, setIsLoading] = useState(false);
  const initialLoginForm = {email: '', password: ''};
  const [hidePass, setHidePass] = useState(true);


  const submitLogin = async values => {
    Keyboard.dismiss();
    setIsLoading(true);

    setIsLoading(false);
  };

  const renderLoginInputs = () => {
    return (
      <View style={styles.loginContainer}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialLoginForm}
          onSubmit={values => submitLogin(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <LoginInput
                onChangeText={handleChange('mobile_no')}
                onBlur={handleBlur('mobile_no')}
                value={values?.email}
                iconName="cLEmail"
                // keyboardType="Mobile-No"
                name="mobile_no"
                placeholder="Mobile No"
                errors={errors.email}
                touched={touched.email}
              />

              <View style={styles.mTop10}>
                <LoginInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values?.password}
                  iconName="cLPassword"
                  name="password"
                  placeholder="Password"
                  secureTextEntry={hidePass}
                  onHidePress={() => setHidePass(!hidePass)}
                  hidePass={hidePass}
                  rightIcon={true}
                  errors={errors.password}
                  touched={touched.password}
                />
              </View>
              <AppButton
                text={'Login'}
                onPress={handleSubmit}
                // disabled={!isValid}
                // isLoading={isLoading}
                style={styles.loginBtn}
                textStyle={styles.loginText}
              />
            </>
          )}
        </Formik>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 0}
      keyboardVerticalOffset={0}
      enabled>
      <StatusBar barStyle={'dark-content'} translucent={true} hidden />
      {/* <ImageBackground
        style={styles.image}
        source={require('../../Assets/Media/LoginBG.png')}
        > */}
        <ScrollView
          overScrollMode={'never'}
          style={styles.flex1}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.mainContainer}>
          <View style={styles.alignCenter}>
            {/* <FastImage
              style={styles.logoImg}
              resizeMode={'contain'}
              source={require('../../Assets/Media/CustomIcons/logos/Logo.gif')}
            /> */}
            <View style={styles.headerContainer}>
              <View style={styles.topTextView}>
                <Text style={styles.headerText}>welcome back</Text>
              </View>
              <View style={styles.bottomTextView}>
                <Text style={styles.headerText1}>{"Let's begin !"}</Text>
              </View>
            </View>
            {renderLoginInputs()}
          </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flex1: {
    flex: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: Metrics.rfv(20),
  },
  loginContainer: {
    width: '100%',
  },
  topTextView: {
    height: Metrics.rfv(42),
  },
  bottomTextView: {
    height: Metrics.rfv(19),
  },
  mTop10: {
    marginTop: Metrics.rfv(10),
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.rfv(50),
  },
  headerText: {
    fontFamily: Fonts.Roboto700,
    fontSize: FONT_SIZE.large,
    color: Colors.black,
    textTransform: 'capitalize',
    marginBottom: Metrics.rfv(10),
  },
  headerText1: {
    fontFamily: Fonts.Roboto500,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.black,
  },
  logoImg: {
    height: Metrics.rfv(100),
    width: Metrics.rfv(250),
    marginBottom: Metrics.rfv(30),
  },
  clipBoardView: {
    marginHorizontal: Metrics.rfv(20),
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: Metrics.rfv(10),
  },
  loginBtn: {
    backgroundColor:'black',
    borderRadius: Metrics.rfv(10),
    marginTop: Metrics.rfv(60),
    height: Metrics.rfv(40),
  },
  loginText: {
    fontFamily: Fonts.Roboto500,
    fontSize: FONT_SIZE.medium,
  },
  image: {
    flex: 1,
    borderWidth: Metrics.rfv(1),
    borderColor: Colors.greyTheme2,
    borderRadius: Metrics.rfv(6),
  },
});

export default LoginScreen;
