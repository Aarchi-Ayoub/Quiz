import React from 'react';
import {View, Text} from 'react-native';
// Components
import Header from 'components/Header';
// Styles
import styles from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};
