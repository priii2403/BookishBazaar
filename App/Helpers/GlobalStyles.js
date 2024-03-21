import {Platform, StyleSheet} from 'react-native';
import {Colors, FONT_SIZE, Fonts} from '../Themes/AppTheme';
import Metrics from '../Themes/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainTheme5,
  },
  rightIconContainer: {
    marginRight: Metrics.rfv(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  tooltip: {
    position: 'absolute',
    right: Platform.OS === 'ios' ? -Metrics.rfv(10) : -Metrics.rfv(15),
    top: Metrics.rfv(40),
  },
  headerTitle: {
    fontFamily: Fonts.Roboto400,
    fontSize: FONT_SIZE.medium_extra,
    color: Colors.mainTheme2,
  },
  mapIcon: {
    backgroundColor: Colors.mainTheme4,
    height: Metrics.rfv(35),
    width: Metrics.rfv(35),
    borderRadius: Metrics.rfv(17.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallContainer: {
    height: Metrics.rfv(70),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  largeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    height: '100%',
    borderTopLeftRadius: Metrics.rfv(0),
    borderTopRightRadius: Metrics.rfv(0),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  callIcon: {
    height: Metrics.rfv(35),
    width: Metrics.rfv(35),
    borderRadius: Metrics.rfv(17.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.rfv(10),
  },
  modalHeaderText: {
    flex: 0.9,
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto400,
    color: Colors.black,
  },
  tooltipHeader: {
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto500,
  },
  tooltipBody: {
    fontSize: FONT_SIZE.small_medium,
    fontFamily: Fonts.Roboto400,
  },
});
