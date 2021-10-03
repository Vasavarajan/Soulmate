import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import styles from './LoveResultScreen.style';

function LoveResultScreen(props) {
  const {fname, percentage, sname} = props.route.params;
  // const viewShotRef = useRef();

  const yourName = fname;
  const partnerName = sname;
  const convertPercentage = Number(percentage);
  return (
    <>
      <StatusBar animated={true} barStyle="default" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Result Screen</Text>
          <Text style={styles.header}>{yourName}</Text>
          <Text style={styles.header}>{partnerName}</Text>
          <Text style={styles.header}>{convertPercentage}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default LoveResultScreen;
