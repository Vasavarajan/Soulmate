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

const {height} = Dimensions.get('window');

const ErrorModal = props => {
  return (
    <Modal
      animationType="fade"
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View style={styles.container}>
        <View style={styles.innerView}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              style={{
                width: '50%',
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
          <View style={styles.buttonView}>
            <Pressable
              onPress={props.onPress}
              android_ripple={{
                color: Color.ButtonRipple,
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    width: height <= 540 ? '80%' : height <= 750 ? '75%' : '70%',
    height: height <= 540 ? '55%' : height <= 750 ? '45%' : '40%',
    backgroundColor: Color.containerBg,
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 10,
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: height <= 540 ? 0 : height <= 750 ? 5 : 10,
  },
  titleText: {
    fontSize: height <= 540 ? 19 : height <= 750 ? 23 : 25,
    fontFamily: 'AndikaNewBasic-Italic',
    color: Color.ButtonRipple,
  },
  msg: {
    width: '100%',
    paddingVertical: height <= 540 ? 10 : height <= 750 ? 15 : 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgText: {
    fontSize: height <= 540 ? 14 : height <= 750 ? 16 : 18,
    paddingHorizontal: height <= 540 ? 25 : height <= 750 ? 30 : 35,
    fontFamily: 'Courgette',
    textAlign: 'center',
  },
  buttonView: {
    width: '30%',
    height: height <= 540 ? 33 : height <= 750 ? 36 : 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: Color.Main,

    alignItems: 'center',
  },
  buttonText: {
    color: Color.TextInput,
    fontFamily: 'Courgette',
    fontSize: height <= 540 ? 14 : height <= 750 ? 16 : 18,
  },
});

export default ErrorModal;
