import { PermissionsAndroid, Platform, Alert,TextInput } from 'react-native';
import React,{useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import profile from '../../../assets/images/profile6.jpg';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';


const ProfileScreen = () => {

  const navigation = useNavigation();
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [profileImage, setProfileImage] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("John Doe");
  const [location, setLocation] = useState("New York, USA");


  const SigninScreen = () => {
    // Navigate to Create Request screen
    navigation.navigate('SignIn');
  };

  const handleToggle = () => {
    setIsToggleOn(prevState => !prevState);
  };

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);

        const allPermissionsGranted = Object.values(granted).every(
          status => status === PermissionsAndroid.RESULTS.GRANTED
        );

        if (allPermissionsGranted) {
          launchImagePicker();
        } else {
          Alert.alert('Permissions not granted');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      launchImagePicker();
    }
  };

  const launchImagePicker = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage({ uri: response.assets[0].uri });
      }
    });
  };

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setIsEditing(false);
    // You can add additional logic here to save the updated user info, e.g., send it to a server.
  };



  // Sample data for flat lists
  const bloodTypeData = ['AB+'];
  const donatedData = ['02'];
  const requestedData = ['03'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      <TouchableOpacity onPress={requestPermissions}>
        <Image source={profileImage} style={[styles.avatar, isToggleOn && styles.enlargedImage]}/> 
      </TouchableOpacity>

      {/* User name */}
      {isEditing ? (
        <TextInput
          style={styles.editableField}
          value={userName}
          onChangeText={setUserName}
        />
      ) : (
        <Text style={styles.userName}>{userName}</Text>
      )}

      {/* Location */}
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={20} color="red" />
        {isEditing ? (
          <TextInput
            style={styles.editableField}
            value={location}
            onChangeText={setLocation}
          />
        ) : (
          <Text style={styles.location}>{location}</Text>
        )}
      </View>

      {/* Edit and Save buttons */}
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity style={styles.button} onPress={handleSavePress}>
            <Icon name="save" size={20} color="blue" />
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleEditPress}>
            <Icon name="edit" size={20} color="blue" />
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Flat lists */}
      <View style={styles.flatListContainer}>
            {/* Blood Type */}
        <View style={styles.FlatContainer}>
            <FlatList
              style={styles.FlatInContainer}
              data={bloodTypeData}
              renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}
              horizontal
            />
            <Text style={styles.In}>Blood  Type</Text>
        </View>


        <View style={styles.FlatContainer}>
            {/* Donated */}
            <FlatList
            style={styles.FlatInContainer}
            data={donatedData}
            renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}
            horizontal
            />
            <Text style={styles.In}>Donated</Text>
        </View>

        <View style={styles.FlatContainer}>
            {/* Requested */}
            <FlatList
            style={styles.FlatInContainer}
            data={requestedData}
            renderItem={({ item }) => <Text style={styles.list}>{item}</Text>}
            horizontal
            />
            <Text style={styles.In}>Requested</Text>
        </View>
      </View>

      {/* Available for donate */}
      <View style={styles.availableContainer}>
        <Icon name="heartbeat" size={20} color="red" />
        <Text style={styles.availableText}>Available for donate</Text>
        <TouchableOpacity style={[styles.toggleButton, { backgroundColor: isToggleOn ? '#008000' : '#a31a28' }]}onPress={handleToggle}>
        <Text style={[{color:'white'}]}>{isToggleOn ? 'YES' : 'NO'}</Text>
        </TouchableOpacity>
      </View>

      {/* Sign out */}
      <TouchableOpacity style={styles.signOut} onPress={SigninScreen}>
        <Icon name="sign-out" size={20} color="red" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#a31a28',
    padding:5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: 'center',
    borderColor:'white',
    borderWidth:3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  enlargedImage: {
    width: 150,
    height: 150,
  },
  userName: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight:'bold',
    color:'black',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset 
    textShadowRadius: 5, // Shadow radius
  },

  editableField: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '400',
    color: '#999',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  location: {
    marginLeft: 5,
    fontSize: 16,
    color:'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal:32,
    borderRadius: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'blue',
    marginLeft: 5,
  },
  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  FlatContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8ff', // Background color for FlatContainer
    borderRadius: 10, // Optional: Add border radius for a rounded look
    padding: 10, // Optional: Add padding for spacing
    marginBottom: 20,
    marginHorizontal:8,

  },
  FlatInContainer:{
    fontSize:30,
  },
  In:{
    color:'gray',
  },
  list:{
    fontSize:40,
    fontWeight:'400',
  },
  
  availableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8ff',
    padding:10,
  },
  availableText:{
    marginLeft: 5,
    fontSize: 16,
  },
  toggleButton: {
    marginLeft: 'auto',
    backgroundColor: '#a31a28',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
    padding:10,
    borderRadius:10,
  },
  signOutText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'red',
  },
});

export default ProfileScreen;