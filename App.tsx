/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MainNavigator from './App/Navigation/MainNavigator';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};
function App(): React.JSX.Element {
 
  return (
    <GestureHandlerRootView style={{flex: 1}}>

      <PaperProvider theme={theme}>
        {/* {isConnected === false ? <OfflineBanner /> : null} */}
        <MainNavigator />
      </PaperProvider>

  </GestureHandlerRootView> 
  )
 
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
