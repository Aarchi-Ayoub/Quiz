import React from 'react';
import {View, Text} from 'react-native';
// Components
import Header from 'components/Header';
import Counter from 'components/Counter';
// Styles
import styles from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
    </View>
  );
};
