import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './App/screens/SignInScreen';
import SignUpScreen from './App/screens/SignUpScreen';
import DrawerNavigation from './App/navigation/DrawerNavigation';
import SplashScreen from './App/screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign in',
          }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
