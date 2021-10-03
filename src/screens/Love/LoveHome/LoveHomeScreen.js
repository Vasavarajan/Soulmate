import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import styles from './LoveHomeScreen.style';
import AppLoader, {
  loaderRef,
  showLoader,
  hideLoader,
} from '../../../components/LoadingAnimation/Apploader';
import {useNetInfo} from '@react-native-community/netinfo';
import ErrorModal from '../../../components/Modals/ErrorModal';

import {API_KEY, BASE_URL, API_HOST} from '@env';
// ApiClient.init(API_KEY, BASE_URL, API_HOST);
function LoveHomeScreen(props) {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');

  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    title: '',
    message: '',
    source: require('../../../assets/animations/oops.json'),
  });
  const nextRef = useRef(null);

  const netInfo = useNetInfo();

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
    <>
      <StatusBar animated={true} barStyle="default" />
      <SafeAreaView>
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
        <View style={styles.container}>
          <Text style={styles.header}>Home Screen</Text>
        </View>
        <View>
          <TextInput
            // style={styles.textInput}
            onChangeText={text => setYourName(text)}
            value={yourName}
            placeholder="Your Name"
            // placeholderTextColor={Color.TextInputPh}
            maxLength={30}
            returnKeyType="next"
            autoCapitalize="words"
            onSubmitEditing={() => {
              nextRef.current.focus();
            }}
          />
        </View>
        <View>
          <TextInput
            // style={styles.textInput}
            onChangeText={setPartnerName}
            value={partnerName}
            placeholder="Partner Name"
            // placeholderTextColor={Color.TextInputPh}
            maxLength={30}
            ref={nextRef}
            returnKeyType="done"
            autoCapitalize="words"
          />
        </View>

        <View style={styles.buttonView}>
          <Pressable onPress={find}>
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Go</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <AppLoader ref={loaderRef} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default LoveHomeScreen;
