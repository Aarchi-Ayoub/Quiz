import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export default () => {
  const user = useSelector(state => state.user.user);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          style={styles.profile}
          source={require('imgs/profile.png')}
        />
        <Text style={styles.helloText}>Hi, {user.name}</Text>
        <Text style={styles.descText}>Larem insum dolor sit amet</Text>
      </View>
    </View>
  );
};
