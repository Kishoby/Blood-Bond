import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './src/Navigation';
import { initializeApp } from '@react-native-firebase/app';
import * as Linking from 'expo-linking';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBDF1EKHqdSYu76D9GhThtutK0StEyC3fo",
  authDomain: "otpauthapp-9ed7d.firebaseapp.com",
  projectId: "otpauthapp-9ed7d",
  storageBucket: "otpauthapp-9ed7d.appspot.com",
  messagingSenderId: "731240131076",
  appId: "1:731240131076:android:644755e03fd5e4b10ea351"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: '731240131076-cqnnhi7kdldm71gg3k725llm52i16jbd.apps.googleusercontent.com', 
});


export { auth, firestore };
export default function App() {
  return ( 
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9FBFC',
    
  },
});
