/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import colors from './constants/colors';
import StackNavigation from './navigation/StackNavigation';
import RootNavigation from './navigation/RootNavigation';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};
const App = () => {
  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
    // <StatusBar backgroundColor={colors.primary} />
    <PaperProvider theme={theme}>
    <RootNavigation />
    </PaperProvider>
  );
};

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
