import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoveHomeScreen, LoveResultScreen, SettingScreen} from './src/screens';
import {enableScreens} from 'react-native-screens';
enableScreens();
import RNBootSplash from 'react-native-bootsplash';

const LoveStack = createNativeStackNavigator();

function LoveStackScreen() {
  return (
    <LoveStack.Navigator>
      <LoveStack.Screen
        name="LoveHome"
        component={LoveHomeScreen}
        options={{headerShown: false}}
      />
      <LoveStack.Screen name="LoveResult" component={LoveResultScreen} />
    </LoveStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Setting" component={SettingScreen} />
      {/* <SettingsStack.Screen name="Details" component={SettingScreen} /> */}
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{headerShown: false}}
//         />
//         {/* <Stack.Screen
//           name="Result"
//           component={ResultScreen}
//           options={{headerShown: false}}
//         /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  // RNBootSplash.hide({fade: true});

  useEffect(() => {
    // const init = async () => {
    //   // …do multiple sync or async tasks
    // };

    // init().finally(async () => {
    RNBootSplash.hide({fade: true});
    //   console.log('Bootsplash has been hidden successfully');
    // });
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // tabBarIcon: ({focused, color, size}) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = focused
          //       ? 'ios-information-circle'
          //       : 'ios-information-circle-outline';
          //   } else if (route.name === 'Settings') {
          //     iconName = focused ? 'ios-list-box' : 'ios-list';
          //   }

          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={LoveStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
