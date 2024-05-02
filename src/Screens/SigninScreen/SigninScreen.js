 import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
 import React, {useState} from 'react';
 import Logo from '../../../assets/images/BloodBond.png';
 import Custominput from '../../Components/Custominput';
 import CustomButton from '../../Components/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


 
 const SigninScreen = () => {
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');

  const {height}= useWindowDimensions();
  const navigation= useNavigation();
 
  const onSignInPressed= () => {
    //validate user
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed= () => {
   navigation.navigate('ForgotPassword');

  };
 
  const onSignUpPress= () => {
    navigation.navigate('SignUp');
  };
     return (
      <ScrollView showsVerticalScrollIndicator={false}>

     <View style={styles.container}>
         <Image source={Logo} 
         style={[styles.logo, 
         {height: height*0.3}]} 
         resizeMode="contain" 
         />

         <Custominput placeholder='Username' 
         value={username} 
         setValue={setUsername}
         />
         <Custominput  placeholder='Password' 
         value={password} 
         setValue={setPassword}
         secureTextEntry={true}
         />
         <CustomButton text="Sign In" 
         onPress={onSignInPressed}
         
         />
         <CustomButton text="Forgot Password?"
         onPress={onForgotPasswordPressed} 
         type="TERTIARY"
         
         />
         <SocialSignInButtons />
         <CustomButton text="Don't have an account? Create one"
         onPress={onSignUpPress} 
         type="TERTIARY"
         
         />
     </View>
     </ScrollView>
   );
 };

 const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding:20,


    margin: 20,

  },
    logo: {
        width: '80%',
        maxWidth:300,
        maxHeight: 280,
        margin:40,
      },

 });
 
 export default SigninScreen;             