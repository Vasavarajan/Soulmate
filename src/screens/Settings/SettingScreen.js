import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import styles from './SettingScreen.style';

function SettingScreen() {
  return (
    <>
      <StatusBar animated={true} barStyle="default" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Setting Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default SettingScreen;
