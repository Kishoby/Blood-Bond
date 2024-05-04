import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../Components/Custominput';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';



const CreateRequestScreen = () => {
 const [username, setUsername]=useState('');
 const[email,setEmail]=useState('');
 const [password, setPassword]=useState('');
 const[passwordRepeat,setPasswordRepeat]=useState('');

 const navigation = useNavigation();


 const onRegisterPressed= () => {
   navigation.navigate('ConfirmEmail');
 };

    return (
     <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
        <Text style={styles.title}>
           Create a Request
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

        <CustomButton text="Request" 
        onPress={onRegisterPressed}
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


export default CreateRequestScreen