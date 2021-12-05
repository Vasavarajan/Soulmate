import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');
// import Color from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    paddingVertical: 20,
    marginHorizontal: 15,
  },
  name: {
    color: '#fff',
    fontSize: 50,
    fontFamily: 'Tahu!',
    letterSpacing: 5,
  },
  percentage: {
    fontFamily: 'AndikaNewBasic-Italic',
    fontSize: 25,
  },
});
