import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../Components/Custominput';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';



const CreateRequestScreen = () => {
  const [city, setCity]=useState('');
  const[hospital,setHospital]=useState('');
  const [bloodType, setbloodType]=useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [note, setNote] = useState('');

 const navigation = useNavigation();


 const onRegisterPressed= () => {
   navigation.navigate('SuccessScreen');
 };

    return (
     <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
        <Text style={styles.title}>
           Create a Request
        </Text>

        <Custominput
          placeholder='City' 
          value={city} 
          setValue={setCity}
          icon="city-icon"
        />

        <Custominput  
        placeholder='Hospital' 
        value={hospital} 
        setValue={setHospital}
        />

        <Custominput  
        placeholder='Blood Type' 
        value={bloodType} 
        setValue={setbloodType}
        />

        <Custominput  
        placeholder='Mobile' 
        value={mobileNumber} 
        setValue={setMobileNumber}
        />

        <Custominput  
        placeholder='Add a Note' 
        value={note} 
        setValue={setNote}
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
     

});


export default CreateRequestScreen