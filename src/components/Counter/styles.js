import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    // Position
    position: 'absolute',
    top: '25%',
    left: '10%',
    right: '10%',
    // Border
    borderRadius: 24,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Row
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingLeft: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: '2.5%',
  },
  title: {
    color: '#000',
    fontSize: 14,
    marginBottom: 8,
  },
  // Question
  question: {
    borderRadius: 8,
    backgroundColor: '#cfdff3',
    height: '65%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: '#302ea7',
    fontWeight: 'bold',
    fontSize: 14,
  },
  // Timer
  time: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  timer: {
    borderRadius: 8,
    backgroundColor: '#cfdff3',
    height: 50,
    width: '29%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec: {
    color: '#f19b4d',
    fontWeight: 'bold',
    fontSize: 14,
  },
  minSec: {
    color: '#f19b4d',
    fontWeight: 'bold',
    fontSize: 8,
  },
  extraSpace: {
    marginRight: 15,
  },
});
