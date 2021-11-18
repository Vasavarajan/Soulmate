import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import Color from '../../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  // contentContainer: {
  //   // height: '100%',
  // },
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    // height: height * 0.1,
    paddingTop: 20,
  },
  header: {
    fontFamily: 'Guttenbay',
    fontSize: height * 0.07,
    color: Color.Title,
    marginTop: 10,
    letterSpacing: 10,
  },
  animation: {
    height: height * 0.3,
  },
  viewInput: {
    alignItems: 'center',
    height: height * 0.08,
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    borderWidth: 2,
    borderColor: Color.TextBorder,
    backgroundColor: Color.TextBackGround,
    width: '80%',
    borderRadius: height <= 540 ? 8 : height <= 750 ? 15 : 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 10,
  },
  textInput: {
    width: '100%',
    fontSize: height <= 540 ? 17 : height <= 750 ? 21 : 25,
    height: '100%',
    fontFamily: 'AndikaNewBasic-Italic',
    textAlign: 'center',
    letterSpacing: 2,
    color: Color.TextInput,
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: height <= 540 ? 15 : height <= 750 ? 25 : 35,
    marginBottom: height <= 540 ? 5 : height <= 750 ? 10 : 15,
    height: height * 0.1,
    alignItems: 'center',
  },
  buttons: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
  },

  button: {
    height:
      height <= 540
        ? height * 0.1
        : height <= 750
        ? height * 0.1
        : height * 0.1,
    alignItems: 'center',
    width: '100%',
    // justifyContent: 'center',
  },
  buttonText: {
    fontSize: height <= 540 ? 16 : height <= 750 ? 20 : 23,

    fontFamily: 'AndikaNewBasic-Italic',
    color: Color.Button,
    padding: 15,
  },
});
