import { View, Text, StyleSheet, ScrollView, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../Components/Custominput';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../../assets/images/HomeIcon.png';
import { Picker } from '@react-native-picker/picker';


const CreateRequestScreen = () => {
  const [city, setCity]=useState('');
  const[hospital,setHospital]=useState('');
  const [bloodType, setBloodType]=useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [note, setNote] = useState('');

 const navigation = useNavigation();


 const onRegisterPressed= () => {
   navigation.navigate('SuccessScreen');
 };

 const handleMobileNumberChange = (inputValue) => {
  // Allow only numbers
  if (/^\d+$/.test(inputValue) || inputValue === '') {
    setMobileNumber(inputValue);
  } else {
    Alert.alert('Error', 'Please enter numbers only.');
  }
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
          Icon="city-icon"
        />


        <Custominput  
        placeholder='Hospital' 
        value={hospital} 
        setValue={setHospital}
        />

<View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Blood Type</Text>
        <Picker
          selectedValue={bloodType}
          style={styles.picker}
          onValueChange={(itemValue) => setBloodType(itemValue)}>
          <Picker.Item label="Select Here!" value="" style={{ color: '#999' }}/>
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
        </Picker>
      </View>

        
        <TextInput  
        placeholder='Mobile' 
        value={mobileNumber} 
        style={styles.input}
        onChangeText={handleMobileNumberChange}
        keyboardType='numeric'
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

     input: {
      borderWidth: 2,
      borderColor: '#e5e4e2',
      padding: 10,
      marginTop:10,
      marginBottom: 10,
      width: '100%',
      height:40,
      borderRadius:7,
      backgroundColor:'white',
    },

    picker: {
      width: '100%',
      height: 40,
      borderWidth: 2,
      borderColor: '#e5e4e2',
      borderRadius: 7,
      
    },

    pickerContainer: {
      width: '100%',
      marginVertical:10,
      borderWidth: 2,
      borderColor: '#e5e4e2',
      borderRadius: 7,
      backgroundColor:'white',
    },
  
    pickerLabel: {
      fontSize: 16,
      color: '#6b0711',
      marginBottom: 5,
      marginLeft:10,
      marginTop:10,
    },
     

});


export default CreateRequestScreen