import React,{useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import profile from '../../../assets/images/profile6.jpg';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation();
  const [isToggleOn, setIsToggleOn] = useState(false);

  const SigninScreen = () => {
    // Navigate to Create Request screen
    navigation.navigate('SignIn');
  };

  const handleToggle = () => {
    setIsToggleOn(prevState => !prevState);
  };

  // Sample data for flat lists
  const bloodTypeData = ['AB+'];
  const donatedData = ['02'];
  const requestedData = ['03'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      <TouchableOpacity onPress={handleToggle}>
        <Image source={profile} style={[styles.avatar, isToggleOn && styles.enlargedImage]}/> 
      </TouchableOpacity>

      {/* User name */}
      <Text style={styles.userName}>John Doe</Text>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Icon name="map-marker" size={20} color="red" />
        <Text style={styles.location}>New York, USA</Text>
      </View>

      {/* Call Now and Request buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#008000' }]}>
          <Icon name="phone" size={20} color="white" />
          <Text style={styles.buttonText}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#a31a28' }]}>
          <Icon name="rocket" size={20} color="white" />
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
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
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: 'center',
    borderColor:'white',
    borderWidth:3,
  },
  enlargedImage: {
    width: 200,
    height: 200,
  },
  userName: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset 
    textShadowRadius: 5, // Shadow radius
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 40,
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
    padding: 13,
    paddingHorizontal:32,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
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
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  },
  signOutText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'red',
  },
});

export default ProfileScreen;