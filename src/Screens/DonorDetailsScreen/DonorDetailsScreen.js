import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const DonorDetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.details}>      
        <Text style={styles.header}>User Details</Text>
        <Image source={user.profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{user.name}</Text>
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.text}>{user.location}</Text>
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.label}>Blood Group:</Text>
            <Text style={styles.text}>{user.bloodGroup}</Text>
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.label}>Last Donated Date:</Text>
            <Text style={styles.text}>{user.lastDonatedDate}</Text>
        </View>
      </View>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  details: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  headerContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6b0711',
    textAlign:'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#6b0711',
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: 'center',
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
});

export default DonorDetailsScreen;
