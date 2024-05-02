import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

 
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