import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button } from 'react-native'
import {
  GoogleSignin, GoogleSigninButton,
  statusCodes
} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';

export default ScreenC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {

    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '295770717067-aqs2oln5i5kc9j6ogtne8mthcbdvohes.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER

    });
    isSignedIn();

    console.log('configure');
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      // Set User Info if user is already signed in
      // _getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
    setLoggedIn(false);
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const { accessToken, idToken } = await GoogleSignin.signIn();
      console.log(accessToken,'  ', idToken);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);


    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        alert('Error!');
      }
    }
  };
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (user) setLoggedIn(true);
  }


  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
      setLoggedIn(false);
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.body}>
        {!loggedIn && (
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        )}
      </View>
      <View style={styles.body}>
        {!user && <Text>You are currently logged out</Text>}
        {user && (
          <View>
            <Text>Welcome {user.displayName}</Text>
            <Button
              onPress={signOut}
              title="LogOut"
              color="red"></Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  body: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  }
})