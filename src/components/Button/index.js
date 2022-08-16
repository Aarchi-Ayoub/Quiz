import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.text}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};
