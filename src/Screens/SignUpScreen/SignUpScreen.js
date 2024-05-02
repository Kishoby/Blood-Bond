 import { View, Text, StyleSheet, ScrollView } from 'react-native';
 import React, {useState} from 'react';
 import Custominput from '../../Components/Custominput';
 import CustomButton from '../../Components/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


 
 const SignUpScreen = () => {
  const [username, setUsername]=useState('');
  const[email,setEmail]=useState('');
  const [password, setPassword]=useState('');
  const[passwordRepeat,setPasswordRepeat]=useState('');

  const navigation = useNavigation();
 
 
  const onRegisterPressed= () => {
    navigation.navigate('ConfirmEmail');
  };
 
  
  const onSignInPress= () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed =() => {
    console.warn('onTermsOfUsePressed');
  };
  const onPrivacyPolicyPressed =() => {
    console.warn('onPrivacyPolicyPressed');
  };
  const onSignInGoogle =() => {
    console.warn('Sign In Google');
  };
     return (
      <ScrollView showsVerticalScrollIndicator={false}>

     <View style={styles.container}>
         <Text style={styles.title}>
            Create an account
         </Text>

         <Custominput placeholder='Username' 
         value={username} 
         setValue={setUsername}
         />
         <Custominput  placeholder='Email' 
         value={email} 
         setValue={setEmail}
         />
         <Custominput  placeholder='Password' 
         value={password} 
         setValue={setPassword}
         secureTextEntry={true}
         />
         <Custominput  placeholder='Confirm Password' 
         value={passwordRepeat} 
         setValue={setPasswordRepeat}
         secureTextEntry={true}
         />


         <CustomButton text="Register" 
         onPress={onRegisterPressed}
         />
         <Text style={styles.text}>
          By registering, you confirm that you accept our {''}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text>{''} and {''}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
         </Text>
         <SocialSignInButtons/>
         <CustomButton
         text="Sign In with Google"
         onPress={onSignInGoogle}
         bgColor="#FAE9EA"
         FgColor="#DD4D44"
         />
         
         <CustomButton text="Have an account? Sign In"
         onPress={onSignInPress} 
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
    marginVertical:50,

  },
  
      title :{
        fontSize:24,
        fontWeight:'bold',
        color:'#6b0711',
        margin: 35,
      },
      text:{
        color: 'gray',
        marginVertical:10,
      },
      link:{
        color:'#FDB075',
      },

 });
 
 export default SignUpScreen;             
 