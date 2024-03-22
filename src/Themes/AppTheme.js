import {DefaultTheme} from '@react-navigation/native';
import {Dimensions, PixelRatio} from 'react-native';
import Metrics from './Metrics';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const themesList = [
  {
    ...DefaultTheme,
    colors: {
      //custom theme
      ...DefaultTheme.colors,
      mainTheme1: '#121D3F',
      mainTheme2: '#3E4685',
      mainTheme3: '#565FA7',
      mainTheme4: '#D4D1EB',
      mainTheme5: '#E4E5E6',
      //
      logoTheme1: '#121D3F',
      logoTheme2: '#F67567',
      logoTheme3: '#2CA9E1',
      bg1: '#C4CAE3',
      bg1Light: '#E4E5E6',
    },
  },
  {
    ...DefaultTheme,
    colors: {
      //default theme V1
      ...DefaultTheme.colors,
      mainTheme1: '#312B47',
      mainTheme2: '#3E4685',
      mainTheme3: '#565FA7',
      mainTheme4: '#D4D1EB',
      mainTheme5: '#EEE9FD',
    },
  },
  {
    ...DefaultTheme,
    colors: {
      //green
      ...DefaultTheme.colors,
      mainTheme1: '#023020',
      mainTheme2: '#004F46',
      mainTheme3: '#006F74',
      mainTheme4: '#ABDAC9',
      mainTheme5: '#ECFFFF',
    },
  },
  {
    ...DefaultTheme,
    colors: {
      //brown
      ...DefaultTheme.colors,
      mainTheme1: '#664c4f',
      mainTheme2: '#836265',
      mainTheme3: '#c8b6b8',
      mainTheme4: '#ded3d4',
      mainTheme5: '#f4f0f1',
    },
  },
];

export const Colors = {
  black: '#000000',
  blackAccent: '#111111',
  white: '#ffffff',
  TuftsBlue: '#4267b2',
  whiteAccent: '#FAFAFA',
  background: '#E5E5E5',
  errorText: 'red',
  northTexasGreen: 'rgba(0,159,42,0.3)',
  coralRed: 'rgba(255,57,66,0.3)',
  pink: '#cd486b',
  greyTheme1: '#707174',
  greyTheme2: '#ADADAD',
  greyTheme3: '#F0F0F0',
  greyTheme4: '#ADADAD',
  greyTheme5: '#F1F1F1',
  chatBackground: '#F7F7F7',
  mainTheme1: '#312B47',
  mainTheme2: '#3E4685',
  mainTheme3: '#565FA7',
  mainTheme4: '#D4D1EB',
  mainTheme5: '#EEE9FD',
  logoTheme1: '#121D3F',
  logoTheme2: '#F67567',
  logoTheme3: '#2CA9E1',
  tagBackground: '#D7EDFF',
  floatingBtn: '#87E3E4',
  callGreen: '#1B5E20',
  calenderDates: '#002B38',
  chartColor: ['#F44D42', '#F4B114', '#7A982C', '#2196F3'],
  cardTopColor: '#F3EFFF',
  platinum: '#e7e7e7',
  dasboardStates: {
    green: '#7CB77F',
    yellow: '#FBC02D',
    blue: '#2196F3',
    red: '#EF5350',
    orange: '#FFA500',
  },
  forestGreen: 'rgba(0, 153, 66,0.8)',
  dashboardTaskStates: {
    borderColor: ['#565FA7', '#1ABC9C', '#F36157'],
    bgColor: [
      'rgba(102, 88, 221, 0.15)',
      'rgba(26, 188, 156, 0.15)',
      'rgba(243, 97, 87, 0.15)',
    ],
    textColor: ['#3E4685', '#1ABC9C', '#F36157'],
  },
  contactDrawer: '#333333',
  callDecline: 'rgb(255,57,66)',
  callAccept: 'rgb(0,159,42)',
  lowPriority: '#66BB6A',
  mediumPriority: '#4bc6f6',
  highPriority: '#f27366',
  switchColor: '#C4C4C4',
  chatIconsBorder: '#C4C0E0',
  invalidPhone: '#EF535050',
  apptStatus: {
    Confirmed: '#0dc68c',
    Cancelled: '#ff7b63',
    Showed: '#545058',
    NoShowed: '#0072bc',
    Pending: '#2ba5dd',
  },
  apptStatusBackground: {
    Confirmed: '#d8f4ea',
    Cancelled: '#ffe8e5',
    Showed: '#ded9ea',
    NoShowed: '#c9e0ee',
    Pending: '#d1eaf5',
  },
  lightGreen: '#d5e8d7',
  lightPink: '#eddfdf',
  darkSkyBlue: '#51abf5',
  lightRed: '#f5f5f5',
  shadow3: 'rgba(0,0,0,0.3)',
  shadow8: 'rgba(0, 153, 66,0.8)',
  shadow008: 'rgba(0, 0, 0, 0.08)',
  shadow35: 'rgba(0, 0, 0, 0.35)',
  shadow25: 'rgba(0, 0, 0, 0.25)',
  shadow50: 'rgba(0, 0, 0, 0.5)',
  shadow05: 'rgba(0, 0, 0, 0.05)',
  shadow40: 'rgba(0, 0, 0, 0.40)',
  transparent: 'transparent',
  recentBlue: '#78a5fa',
  recentGreen: '#5bde7e',
  followupOrange: '#f78b6a',
  red: '#FF0000',
  loginBlue: '#2FA7DF',
  simBox1: '#7CB77F20',
  simBox2: '#2196F320',
  whiteShadow: '#ffffff50',
  appF2F2F2: '#F2F2F2',
  appDBE3ED: '#DBE3ED',
  app7298C5: '#7298C5',
  appE2ECE1: '#E2ECE1',
  app72B38A: '#72B38A',
  appD7EBF3: '#D7EBF3',
  app5EB6D9: '#5EB6D9',
  appF8E1DE: '#F8E1DE',
  appE7E9F3: '#E7E9F3',
  app2BA5DD: '#2BA5DD',
  appE9F6FC: '#E9F6FC',
  appC4CAE3: '#C4CAE3',

  app535464: '#696a79',
  appfcded9: '#fcded9',
  appF9BCB2: '#F9BCB2',
  appFEEAE7: '#FEEAE7',
  appF44630: '#F44630',

  app696A79: '#696a79',
  appD5F3FC: '#D5F3FC',
  appD5D3D3: '#D5D3D3',
  appEAE5E5: '#EAE5E5',
  app8A8B94: '#8A8B94',

  app0000007F: '#0000007F',
  app00000017: '#00000017',
  app00000066: '#00000066',
  app7DA7D91A: '#7DA7D91A',
  appF8F8F8: '#F8F8F8',
  cartRowBg: '#EDF1F6',
  progressContainer: '#E9FCE9',
  contactColor: '#ECF1F7',
  accountColor: '#d9e3e1',
  dealColor: '#fcf2f0',
  appFFFFFF00: '#FFFFFF00',
  app9FA5D363: '#9FA5D363',
  appf3f6fb: '#f3f6fb',
  dashboardTaskGreenIcon: '#5f8575',
  dashboardTaskBg: '#f1f3f4',
  subscriptionColor: '#2565c0',
  subscriptionBgColor: '#bbdefb',
  onetimeColor: '#ef7113',
  onetimeBgcolor: '#fce0b2',
};

export const Fonts = {
  Roboto100: 'Roboto-Thin',
  Roboto300: 'Roboto-Light',
  Roboto400: 'Roboto-Regular',
  Roboto500: 'Roboto-Medium',
  Roboto700: 'Roboto-Bold',
  Roboto900: 'Roboto-Black',
};

export const FONT_SIZE = {
  very_tiny: Metrics.rfv(6),
  tiny: Metrics.rfv(8),
  small_tiny: Metrics.rfv(10),
  small: Metrics.rfv(12),
  small_medium: Metrics.rfv(14),
  medium: Metrics.rfv(16),
  medium_extra: Metrics.rfv(18),
  regular: Metrics.rfv(20),
  regular_extra: Metrics.rfv(22),
  large: Metrics.rfv(24),
  extra_large: Metrics.rfv(48),
};

export const wp = x => {
  const widthPercent = x;
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const hp = y => {
  const heightPercent = y;
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
