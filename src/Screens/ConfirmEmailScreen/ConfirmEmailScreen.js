 import { View, Text, StyleSheet, ScrollView } from 'react-native';
 import React, {useState} from 'react';
 import Custominput from '../../Components/Custominput';
 import CustomButton from '../../Components/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


 
 const ConfirmEmailScreen = () => {
  const[code,setCode]=useState('');

  const navigation=useNavigation();
 
 
  const onConfirmPressed= () => {
   navigation.navigate('Home');
  };
 
  
  const onSignInPress= () => {
    navigation.navigate('SignIn');
  };
 
  const onResendPress =() => {
    console.warn('Resend');
  };

     return (
      <ScrollView showsVerticalScrollIndicator={false}>

     <View style={styles.container}>
         <Text style={styles.title}>
            Confirm your email
         </Text>

         <Custominput placeholder='Enter your Confirmation Code' 
         value={code} 
         setValue={setCode}
         />
         <CustomButton text="Confirm" 
         onPress={onConfirmPressed}
         />
         
         <CustomButton text="Resend code"
         onPress={onResendPress} 
         type="SECONDARY"
         />
         
         <CustomButton text="Back to Sign In"
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

  },
  
      title :{
        fontSize:24,
        fontWeight:'bold',
        color:'#051C60',
        margin: 10,
      },
      text:{
        color: 'gray',
        marginVertical:10,
      },
      link:{
        color:'#FDB075',
      },

 });
 
 export default ConfirmEmailScreen;             