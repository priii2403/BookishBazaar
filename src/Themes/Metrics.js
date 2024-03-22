import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX, isTablet} from './iPhoneX';

const {width, height} = Dimensions.get('window');

const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait
const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

function rfp(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

function RFValue(fontSize, standardScreenHeight = 812) {
  const size = 375;
  const wid = width < height ? width : height;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;

  const res =
    Platform.isPad || isTablet() || width > 500
      ? heightPercent.toFixed(2)
      : wid / (size / fontSize);
  return Number(res);
}

const appScaler = Math.min(width, height) / 375; //scaleFactor=375

const Metrics = {
  width: width < height ? width : height,
  height: height < width ? width : height,
  rfp: rfp,
  rfv: RFValue,
  scaler: appScaler,
};

export default Metrics;
