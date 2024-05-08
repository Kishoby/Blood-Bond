import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import { SafeAreaView } from 'react-native-safe-area-context';

const FindDonorsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [userList, setUserList] = useState([]);

  // Dummy data for user list
  const dummyUsers = [
    { id: 1, name: 'John Doe', location: 'New York', bloodGroup: 'O+' },
    { id: 2, name: 'Jane Smith', location: 'Los Angeles', bloodGroup: 'A-' },
    { id: 3, name: 'Michael Johnson', location: 'Chicago', bloodGroup: 'B+', age: 28, weight: 80, lastDonationDate: '2024-02-10' },
    { id: 4, name: 'Emily Brown', location: 'Houston', bloodGroup: 'AB-', age: 35, weight: 60, lastDonationDate: '2023-11-05' },
    { id: 5, name: 'William Davis', location: 'Miami', bloodGroup: 'O-', age: 40, weight: 75, lastDonationDate: '2024-03-18' },
    { id: 6, name: 'Sarah Wilson', location: 'Seattle', bloodGroup: 'A+', age: 27, weight: 68, lastDonationDate: '2024-04-05' },
    { id: 7, name: 'Christopher Lee', location: 'San Francisco', bloodGroup: 'B-', age: 32, weight: 72, lastDonationDate: '2023-09-28' },
    { id: 8, name: 'Jessica Martinez', location: 'Dallas', bloodGroup: 'AB+', age: 29, weight: 67, lastDonationDate: '2024-02-28' },
    { id: 9, name: 'Daniel Taylor', location: 'Atlanta', bloodGroup: 'A-', age: 31, weight: 75, lastDonationDate: '2024-03-10' },
    { id: 10, name: 'Amanda White', location: 'Boston', bloodGroup: 'O+', age: 33, weight: 70, lastDonationDate: '2023-10-20' },
    // Add more dummy users as needed
  ];

  // Function to handle search
  const handleSearch = () => {
    // Implement search functionality here
    // For simplicity, let's filter the dummyUsers based on searchText
    const filteredUsers = dummyUsers.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setUserList(filteredUsers);
  };

  // Function to render each user item
  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.userItem} onPress={() => navigation.navigate('ProfileScreen', { userId: item.id })}>
      <View style={styles.userInfo}>  
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userDetail}>Location: {item.location}</Text>
      <Text style={styles.userDetail}>Blood Group: {item.bloodGroup}</Text>
      </View>
      <Ionicons name="person-circle-sharp" size={60} color="#6b0711" style={styles.userIcon} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Blood Donors</Text>
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search by name..."
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />

      </View>
      
      {/* User List */}
      <FlatList
        data={searchText ? userList : dummyUsers}
        renderItem={renderUserItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#6b0711',
  },
  searchBar: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },

  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userDetail: {
    fontSize: 16,
    color: '#555',
  },
  userIcon: {
    marginLeft: 10,
  },

  
  

  
});


export default FindDonorsScreen;