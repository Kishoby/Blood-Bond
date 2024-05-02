 import { View, Text, StyleSheet, ScrollView } from 'react-native';
 import React, {useState} from 'react';
 import Custominput from '../../Components/Custominput';
 import CustomButton from '../../Components/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


 
 const ForgotPasswordScreen = () => {
  const[username,setUsername]=useState('');

  const navigation=useNavigation();
 
 
  const onSendPressed= () => {
    navigation.navigate('NewPassword');
  };
 
  
  const onSignInPress= () => {
    navigation.navigate('SignIn');
  };
 
  

     return (
      <ScrollView showsVerticalScrollIndicator={false}>

     <View style={styles.container}>
         <Text style={styles.title}>
            Reset Your Password
         </Text>

         <Custominput placeholder='Username' 
         value={username} 
         setValue={setUsername}
         />
         <CustomButton text="Send" 
         onPress={onSendPressed}
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
 
 export default ForgotPasswordScreen;             