import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Main from './src';
export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Main />
    </SafeAreaView>
  );
};
