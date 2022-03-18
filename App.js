/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CoinsStack from './src/components/coins/CoinsStack';

const App = () => {

  return (
    <NavigationContainer >
      <CoinsStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
