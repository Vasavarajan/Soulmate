import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import Color from '../../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.containerBg,
  },
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: width * 0.8,
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.1,
  },
  header: {
    fontFamily: 'Courgette-Regular',
    fontSize: height * 0.07,
    color: Color.Title,
    marginTop: 10,
  },
  animation: {
    height: height * 0.3,
  },
  viewInput: {
    alignItems: 'center',
    height: height * 0.07,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    borderWidth: 2,
    borderColor: Color.TextBorder,
    backgroundColor: Color.TextBackGround,
    width: '80%',
    borderRadius: height <= 540 ? 8 : height <= 750 ? 12 : 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 10,
  },
  textInput: {
    width: '100%',
    fontSize: height <= 540 ? 15 : height <= 750 ? 18 : 22,
    height: '100%',
    fontFamily: 'AndikaNewBasic-Italic',
    textAlign: 'center',
    letterSpacing: 2,
    color: Color.TextInput,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: height <= 540 ? 15 : height <= 750 ? 25 : 35,
    marginBottom: height <= 540 ? 5 : height <= 750 ? 10 : 15,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
  },
  button: {
    height: height <= 540 ? 50 : height <= 750 ? 60 : 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: height <= 540 ? 14 : height <= 750 ? 18 : 20,

    fontFamily: 'AndikaNewBasic-Italic',
    color: Color.Button,
    padding: 10,
  },
});
