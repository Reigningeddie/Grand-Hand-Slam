import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const testSignUp = () => {
  auth()
    .createUserWithEmailAndPassword('test2@example.com', 'password')
    .then(() => {
      Alert.alert('Welcome to Grand Hand Slam');
    })
    .catch(err => {
      console.log(err);
    });
};

export default function SignUp() {
  return (
    <View style={styles.body}>
      <Text style={styles.txt}>Let's get you signed up!</Text>
      <View style={styles.name}>
        <TextInput
          style={styles.nameInput}
          placeholder={'First Name'}
          placeholderTextColor="#1B1B1B"
        />
        <TextInput
          style={styles.nameInput}
          placeholder={'Last Name'}
          placeholderTextColor="#1B1B1B"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={'Create a User Name'}
        placeholderTextColor="#1B1B1B"
      />
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor="#1B1B1B"
      />
      <TextInput
        style={styles.input}
        placeholder={'Mobile Number'}
        placeholderTextColor="#1B1B1B"
      />
      <TextInput
        style={styles.input}
        placeholder={'New Password'}
        secureTextEntry={true}
        placeholderTextColor="#1B1B1B"
      />
      <TextInput
        style={styles.input}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        placeholderTextColor="#1B1B1B"
      />
      <Pressable onPress={testSignUp} style={styles.btn}>
        <Text style={styles.signUp}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    color: '#1B1B1B',
    fontSize: 30,
  },

  name: {
    marginTop: 50,
    flexDirection: 'row',
  },

  nameInput: {
    color: '#1B1B1B',
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 180,
    marginRight: 15,
    marginLeft: 15,
  },

  input: {
    color: '#1B1B1B',
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 390,
    marginTop: 15,
  },

  btn: {
    backgroundColor: '#2EA1DD',
    fontSize: 10,
    height: 40,
    width: 200,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#2EA1DD',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUp: {
    color: 'aliceblue',
  },
});
