import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors/index';
// import Metrics from '../../Themes/Metrics';
import {Fonts} from '../../Themes/AppTheme';
import {FONT_SIZE} from '../../constants/utils/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import LoginInput from '../../constants/LoginInput';
import AppButton from '../../constants/AppButton';
import Metrics from '../../Themes/Metrics';
import axios from 'axios';
export default function Index(props) {
  const [isLoading, setIsLoading] = useState(false);
  const initialLoginForm = {mobileNumber: '', password: ''};
  const [hidePass, setHidePass] = useState(true);
  const NavigateToSignUP = () => {};
  const submitLogin = async values => {
    console.log(values);
    // Keyboard.dismiss();
    setIsLoading(true);
    axios
      .post('http://localhost:3000/users/login', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('response', response.data);
      })
      .catch(error => {
        console.log('error', error);
        alert('error', error);
        dispatch(userUpdateProfileFail());
      });
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
                onChangeText={handleChange('mobileNumber')}
                onBlur={handleBlur('mobileNumber')}
                value={values?.mobileNumber}
                iconName="cLEmail"
                // keyboardType="Mobile-No"
                name="Mobile No"
                placeholder="Mobile No"
                errors={errors.mobileNumber}
                touched={touched.mobileNumber}
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
                disabled={!isValid}
                isLoading={isLoading}
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
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center',justifyContent:'center'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={NavigateToSignUP}>
            <Text
              style={{
                marginLeft: 5,
                color:colors.primary
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
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
    color: colors.black,
    textTransform: 'capitalize',
    marginBottom: Metrics.rfv(10),
  },
  headerText1: {
    fontFamily: Fonts.Roboto500,
    fontSize: FONT_SIZE.small_medium,
    color: colors.black,
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
    backgroundColor: colors.primary,
    borderRadius: Metrics.rfv(10),
    marginTop: Metrics.rfv(40),
    height: Metrics.rfv(40),
  },
  loginText: {
    fontFamily: Fonts.Roboto500,
    fontSize: FONT_SIZE.medium,
  },
  image: {
    flex: 1,
    borderWidth: Metrics.rfv(1),
    borderColor: colors.greyTheme2,
    borderRadius: Metrics.rfv(6),
  },
});

const loginValidationSchema = yup.object().shape({
  mobileNumber: yup.number().required('mobile no is Required'),
  password: yup.string().required('Password is required'),
});
