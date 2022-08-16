import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export default () => {
  // Read from store
  const counter = useSelector(state => state.counter.value);
  const length = useSelector(state => state.question.question?.length || 0);
  // Local state
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
  });

  // Time funct
  const timeCount = () => {
    const {sec} = time;
    setTimeout(() => {
      sec === 59
        ? setTime({
            sec: 0,
            min: time.min + 1,
          })
        : setTime({...time, sec: time.sec + 1});
    }, 1000);
  };

  // Life cycle
  useEffect(() => {
    timeCount();
  }, [time]);

  // Extraction
  const {sec, min} = time;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.content}>
          <Text style={styles.title}>Question</Text>
          <View style={styles.question}>
            <Text style={styles.count}>
              {counter}/{length}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Temps écoulé</Text>
          <View style={styles.time}>
            <View style={[styles.timer, styles.extraSpace]}>
              <Text style={styles.count}>{min < 10 ? `0${min}` : min}</Text>
            </View>
            <View style={styles.timer}>
              <Text style={styles.minSec}>{sec < 10 ? `0${sec}` : sec}</Text>
              <Text style={styles.sec}>{sec < 10 ? `0${sec}` : sec}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
