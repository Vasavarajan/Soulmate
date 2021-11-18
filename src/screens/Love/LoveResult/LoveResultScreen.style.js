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
    flexDirection: 'row',
  },
  name: {
    justifyContent: 'flex-start',
  },
  percentage: {
    fontFamily: 'AndikaNewBasic-Italic',
    fontSize: 25,
  },
});
