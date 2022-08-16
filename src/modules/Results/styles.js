import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  cadre: {
    marginHorizontal: '10%',
    marginTop: '20%',
    alignItems: 'center',
    padding: '5%',
    shadowColor: '#EEE',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
  },
  // title
  title: {
    fontWeight: 'bold',
    color: '#212121',
    fontSize: 16,
  },
  score: {
    color: '#212121',
    fontSize: 14,
  },
  note: {
    marginTop: 12,
    height: 50,
    width: 75,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfdff3',
  },
  noteText: {
    color: '#302ea7',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#00a8f4',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  btnText: {
    color: '#FFF',
    paddingHorizontal: '5%',
    paddingVertical: '2.5%',
  },
});
