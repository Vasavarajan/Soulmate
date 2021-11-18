import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Color from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('window');

const ErrorModal = props => {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View style={styles.container}>
        <View style={styles.innerView}>
          <View style={styles.buttonView}>
            <Pressable onPress={props.onPress} style={styles.button}>
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={50}
                color="#fff"
              />
            </Pressable>
          </View>
          <View
            style={{
              width: '50%',
              height: '50%',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              style={{
                width: '100%',
                height: '100%',
              }}
              source={props.source}
              autoPlay
              loop
            />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>{props.title}</Text>
          </View>
          <View style={styles.msg}>
            <Text style={styles.msgText}>{props.message}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-end',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    width: '100%',
    height: '100%',
    // alignItems: 'center',
  },
  innerView: {
    width: '100%',
    height: height < 540 ? '55%' : '50%',
    backgroundColor: '#000',
    overflow: 'hidden',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: height <= 540 ? 0 : height <= 750 ? 5 : 10,
  },
  titleText: {
    fontSize: height <= 540 ? 19 : height <= 750 ? 23 : 25,
    fontFamily: 'Zingakon',
    letterSpacing: 10,
    color: '#00BBF0',
  },
  msg: {
    width: '100%',
    paddingVertical: height <= 540 ? 5 : height <= 750 ? 10 : 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgText: {
    fontSize: height <= 540 ? 14 : height <= 750 ? 20 : 18,
    paddingHorizontal: height <= 540 ? 15 : height <= 750 ? 20 : 25,
    fontFamily: 'FomoSans-Regular',
    textAlign: 'center',
    color: '#DBD8E3',
    letterSpacing: 4,
    lineHeight: 30,
  },
  buttonView: {
    position: 'absolute',
    // backgroundColor: '#000',
    right: 15,
    top: 15,
    height: 50,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default ErrorModal;
