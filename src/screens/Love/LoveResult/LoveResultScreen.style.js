import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');
// import Color from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Color.containerBg,
  },
  header: {
    fontFamily: 'AndikaNewBasic-Italic',
    fontSize: 25,
  },
});
