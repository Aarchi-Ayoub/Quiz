import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Styles
import {styles} from './styles';
// Components
import Header from 'components/Header';
// Store actions
import {reinit} from 'features/counterSlice';
export default ({navigation}) => {
  const dispatch = useDispatch();
  // Read from store
  const score = useSelector(state => state.question.correctResponse);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.cadre}>
          <Text style={styles.title}>Félicitation !</Text>
          <Text style={styles.score}>Voici votre score</Text>
          <View style={styles.note}>
            <Text style={styles.noteText}>{score}/20</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(reinit());
              navigation.navigate('Home');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Refaire le test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
