import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
// Components
import Header from 'components/Header';
import Counter from 'components/Counter';
// Styles
import {styles} from './styles';
import Choice from '../../components/Choice';

export default () => {
  // Read from store
  const questions = useSelector(state => state.question.question);
  const counter = useSelector(state => state.counter.value);

  // Current State
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  // Life cycle
  useEffect(() => {
    setCurrentQuestion(questions[counter]);
  }, []);

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

  // Render line
  const receiveFromChild = arg => {
    console.log(arg);
    let table = answers.map(item =>
      item?.label === arg
        ? {...item, checked: !item?.checked}
        : {...item, checked: false},
    );
    setAnswers(table);
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
      </ScrollView>
    </View>
  );
};
