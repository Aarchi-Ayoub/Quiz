import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export default props => {
  // Pass data from child to parent
  const selectChoice = () => props.parentCallback(props?.data?.label);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.touch,
          props?.data?.checked ? styles.pressed : styles.notPressed,
        ]}
        onPress={() => selectChoice()}>
        {props?.data?.checked && (
          <Image
            resizeMode="contain"
            style={styles.done}
            source={require('imgs/done.png')}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.label}>{props?.data?.label || ''}</Text>
    </View>
  );
};
