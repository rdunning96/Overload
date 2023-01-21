import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { GlobalStyles } from './src/constants/styles';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <Navigation />
    </>
  );
}








































// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type { PropsWithChildren } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   useWindowDimensions,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { SceneMap, TabView } from 'react-native-tab-view';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/screens/Home';
// import Profile from './src/screens/Profile';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { GlobalStyles } from './src/constants/styles';
// import Workout from './src/screens/Workout';
// const Stack = createNativeStackNavigator();
// const BottomTabs = createBottomTabNavigator();

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <Text>Test</Text>
//       <NavigationContainer>
//         <BottomTabs.Navigator screenOptions={{
//           headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//           headerTintColor: 'white',
//           tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//           tabBarActiveTintColor: GlobalStyles.colors.accent500,
//         }}>
//           <BottomTabs.Screen name="Home" component={Home} />
//           <BottomTabs.Screen name="Profile" component={Profile} />
//           <BottomTabs.Screen name="Workout" component={Workout} />
//         </BottomTabs.Navigator>
//       </NavigationContainer>
//     </>

//   );
// }


// export default App;

