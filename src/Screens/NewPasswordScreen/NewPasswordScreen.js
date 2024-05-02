 import { View, Text, StyleSheet, ScrollView } from 'react-native';
 import React, {useState} from 'react';
 import Custominput from '../../Components/Custominput';
 import CustomButton from '../../Components/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


 
 const NewPasswordScreen = () => {
  const[code,setCode]=useState('');
  const [newPassword,setNewPassword]=useState('');

  const navigation= useNavigation();
 
 
  const onSubmitPressed= () => {
   navigation.navigate('Home');
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

         <Custominput placeholder='Code' 
         value={code} 
         setValue={setCode}
         />
         <Custominput placeholder='Enter your new Password' 
         value={newPassword} 
         setValue={setNewPassword}
         />
         <CustomButton text="Submit" 
         onPress={onSubmitPressed}
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
 
 export default NewPasswordScreen;             