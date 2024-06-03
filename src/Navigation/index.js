import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import SigninScreen from '../Screens/SigninScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen';
import CreateRequestScreen from '../Screens/CreateRequestScreen/CreateRequestScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DonationRequestScreen from '../Screens/DonationRequestScreen';
import FindDonorsScreen from '../Screens/FindDonorsScreen';
import SuccessRequestScreen from '../Screens/SuccessRequestScreen';
import DonorDetailsScreen from '../Screens/DonorDetailsScreen/DonorDetailsScreen';
import WeightQ1 from '../Screens/WeightScreen1/WeightQ1'



const Stack = createNativeStackNavigator();

const Navigation= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DonationRequest" component={DonationRequestScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="CreateRequest" component={CreateRequestScreen}/>
        <Stack.Screen name="FindDonors" component={FindDonorsScreen}/>
        <Stack.Screen name="SuccessScreen" component={SuccessRequestScreen}/>
        <Stack.Screen name="DonorDetailsScreen" component={DonorDetailsScreen}/>
        <Stack.Screen name="WeightQ1" component={WeightQ1}/>
        <Stack.Screen name="WeightQ2" component={SigninScreen}/>        
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;