import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoveHomeScreen, LoveResultScreen} from './src/screens';
import {enableScreens} from 'react-native-screens';
enableScreens();
import RNBootSplash from 'react-native-bootsplash';

const LoveStack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer>
      <LoveStack.Navigator initialRouteName="Home">
        <LoveStack.Screen
          name="LoveHome"
          component={LoveHomeScreen}
          options={{headerShown: false}}
        />
        <LoveStack.Screen
          name="LoveResult"
          component={LoveResultScreen}
          options={{headerShown: false}}
        />
      </LoveStack.Navigator>
    </NavigationContainer>
  );
}
