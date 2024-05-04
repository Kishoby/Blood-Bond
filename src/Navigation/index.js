import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SigninScreen from '../Screens/SigninScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
const Stack = createNativeStackNavigator();

const Navigation= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;