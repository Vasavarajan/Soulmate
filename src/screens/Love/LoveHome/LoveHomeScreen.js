import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import styles from './LoveHomeScreen.style';
import AppLoader, {
  loaderRef,
  showLoader,
  hideLoader,
} from '../../../components/LoadingAnimation/Apploader';
import {useNetInfo} from '@react-native-community/netinfo';
import ErrorModal from '../../../components/Modals/ErrorModal';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {API_KEY, BASE_URL, API_HOST} from '@env';

function LoveHomeScreen(props) {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');

  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    title: 'Title',
    message: 'Message',
    source: require('../../../assets/animations/oops.json'),
  });
  const nextRef = useRef(null);

  const netInfo = useNetInfo();

  const resetInput = () => {
    setYourName('');
    setPartnerName('');
  };

  const find = () => {
    if (yourName.length == 0 || partnerName.length == 0) {
      setModal(true);
      setErrorMessage({
        title: 'Input Error',
        message: "Your's and partner's name shouldn't be empty",
        source: require('../../../assets/animations/oops.json'),
      });
    } else if (netInfo.isConnected.toString() == 'false') {
      setModal(true);
      setErrorMessage({
        title: 'Network Error',
        message: 'The network connection is lost. Please try again',
        source: require('../../../assets/animations/networkerror.json'),
      });
    } else {
      showLoader();

      fetch(`${BASE_URL}fname=${yourName}&sname=${partnerName}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      })
        .then(response => response.json())
        .then(response => {
          let data = response;
          props.navigation.navigate('LoveResult', data);
          hideLoader();
        })
        .catch(err => {
          hideLoader();
          console.log(err ? err : 'Something went wrong ! ! !');
        });
    }
  };
  return (
    <LinearGradient style={styles.container} colors={['#30c5d2', '#471069']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="default" hidden={true} />
        <SafeAreaView>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View style={styles.innerView}>
              <View style={styles.title}>
                <Text style={styles.header}>SOULMATE</Text>
              </View>
              {/* <View style={styles.animation}> */}
              <LottieView
                style={styles.animation}
                source={require('../../../assets/animations/Boy and Girl Text.json')}
                loop={false}
                autoPlay
              />
              {/* </View> */}

              <View style={styles.viewInput}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={text =>
                    setYourName(text.replace(/[^a-zA-Z]/gi, ''))
                  }
                  value={yourName}
                  placeholder="Your Name"
                  placeholderTextColor={Color.TextInput}
                  maxLength={30}
                  returnKeyType="next"
                  autoCapitalize="characters"
                  textAlign="center"
                  onSubmitEditing={() => {
                    nextRef.current.focus();
                  }}
                />
              </View>
              <View style={styles.viewInput}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={text =>
                    setPartnerName(text.replace(/[^a-zA-Z]/gi, ''))
                  }
                  value={partnerName}
                  placeholder="Partner Name"
                  placeholderTextColor={Color.TextInput}
                  maxLength={30}
                  ref={nextRef}
                  returnKeyType="done"
                  autoCapitalize="characters"
                  textAlign="center"
                />
              </View>

              <View style={styles.buttonView}>
                <Pressable onPress={resetInput} style={styles.buttons}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <MaterialCommunityIcons
                      name="restart"
                      size={50}
                      color="#fff"
                    />
                    <Text style={styles.buttonText}>Reset</Text>
                  </View>
                </Pressable>
                <Pressable onPress={find} style={styles.buttons}>
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Ionicons
                      name="md-arrow-forward-circle-outline"
                      size={50}
                      color="#fff"
                    />
                    <Text style={styles.buttonText}>Go</Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <AppLoader ref={loaderRef} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ScrollView>
      <ErrorModal
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
        title={errorMessage.title}
        message={errorMessage.message}
        source={errorMessage.source}
        onPress={() => setModal(false)}
      />
    </LinearGradient>
  );
}

export default LoveHomeScreen;
