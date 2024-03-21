import * as yup from 'yup';
import {Platform, PermissionsAndroid} from 'react-native';
import {RESULTS} from 'react-native-permissions';
// import {showMessage} from '../store/actions';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid mobile no')
    .required('Mobile Number is Required'),
  password: yup.string().required('Password is required'),
});

export const handleDownloadPermission = async () => {
  const res =
    Platform.OS === 'android'
      ? await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      )
      : true; // no permission needed for download in: iOS --> Files app
  if (res === RESULTS.GRANTED || res === RESULTS.LIMITED || res === true) {
    return true;
  } else if (
    res === RESULTS.DENIED ||
    res === PermissionsAndroid.RESULTS.DENIED ||
    res === false
  ) {
    const res2 =
      Platform.OS === 'android'
        ? await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        )
        : true;
    if (
      res2 === RESULTS.GRANTED ||
      res === PermissionsAndroid.RESULTS.GRANTED
    ) {
      return true;
    } else {
      // showMessage({
      //   message: 'Storage permission required from device Settings.',
      //   variant: 'error',
      // });
      return false;
    }
  } else {
    // showMessage({
    //   message: 'Storage permission required from device Settings.',
    //   variant: 'error',
    // });
    return false;
  }
};
