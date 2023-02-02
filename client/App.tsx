import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StatusBar, Text } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { GlobalStyles } from './src/constants/styles';
import AuthContextProvider, { AuthContext } from './src/store/auth-context';
import React, { useContext, useEffect, useState } from 'react';
import IconButton from './src/components/ui/IconButton';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
        headerRight: ({ tintColor }) => <Button title="logout" color={tintColor} onPress={authCtx.logout} />
      }} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <Text>Loading...</Text>;
  }

  return <Navigation />;
}

// function Home() {
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

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
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

