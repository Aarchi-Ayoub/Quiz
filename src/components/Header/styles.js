import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00aaf7',
    padding: '10%',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    marginVertical: '10%',
  },
  profile: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
  },
  helloText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom: 8,
  },
});
