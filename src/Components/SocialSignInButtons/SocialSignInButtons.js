import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
 
    const SocialSignInButtons = () => {
        const onSignInGoogle =() => {
            console.warn('Sign In Google');
          };

  return (
    <>
       <CustomButton
         text="Sign In with Google"
         onPress={onSignInGoogle}
         bgColor="#FAE9EA"
         FgColor="#DD4D44"
         />
    </>
  );
};

export default SocialSignInButtons;