import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  // Select
  touch: {
    height: 25,
    width: 25,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#26ad60',
  },
  notPressed: {
    backgroundColor: '#BDBDBD',
  },
  done: {
    height: 20,
    width: 20,
  },
});
