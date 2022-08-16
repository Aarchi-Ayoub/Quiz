import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Components
import Header from 'components/Header';
import Counter from 'components/Counter';
import Button from 'components/Button';
import Choice from 'components/Choice';
// Styles
import {styles} from './styles';
// Store Actions
import {increment} from 'features/counterSlice';
import {setCorrect} from 'features/questionSlice';

export default ({navigation}) => {
  // Redux action
  const dispatch = useDispatch();

  // Read from store
  const questions = useSelector(state => state.question.question);
  const counter = useSelector(state => state.counter.value);
  const length = useSelector(state => state.question.question?.length || 0);
  // Current State
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  // Life cycle
  useEffect(() => {
    setCurrentQuestion(questions[counter]);
  }, [counter]);

  useEffect(() => {
    let table = [];
    if (currentQuestion?.answers === {}) {
      return;
    } else {
      (currentQuestion?.answers || [])?.map(answer => {
        table = [...table, {...answer, checked: false}];
      });
    }
    setAnswers(table);
  }, [currentQuestion]);

  useEffect(() => {
    answers.filter(answer => {
      answer?.checked && answer?.correct ? dispatch(setCorrect()) : null;
    });
  }, [answers]);

  // Render line
  const receiveFromChild = arg => {
    let table = answers.map(item =>
      item?.label === arg
        ? {...item, checked: !item?.checked}
        : {...item, checked: false},
    );
    setAnswers(table);
  };

  // Next question
  const next = () => {
    if (length > counter + 1) dispatch(increment());
    else navigation.navigate('Results');
  };
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Question {currentQuestion?.id}</Text>
        <Text style={styles.label}>{currentQuestion?.label}</Text>
        <View style={styles.response}>
          {answers?.map((answer, index) => (
            <Choice
              data={answer}
              parentCallback={receiveFromChild}
              statut={answer?.checked}
              key={index}
            />
          ))}
        </View>
        <Button onPress={() => next()} />
      </ScrollView>
    </View>
  );
};
