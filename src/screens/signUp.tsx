import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

export default function signUp() {
  return (
    <View style={styles.body}>
      <Text style={styles.txt}>Let's get you signed up!</Text>
      <View style={styles.name}>
        <TextInput style={styles.nameInput} placeholder={'First Name'} />
        <TextInput style={styles.nameInput} placeholder={'Last Name'} />
      </View>
      <TextInput style={styles.input} placeholder={'Create a User Name'} />
      <TextInput style={styles.input} placeholder={'Email'} />
      <TextInput style={styles.input} placeholder={'Mobile Number'} />
      <TextInput style={styles.input} placeholder={'New Password'} />
      <TextInput style={styles.input} placeholder={'Confirm Password'} />
      <Pressable style={styles.btn}>
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
    fontSize: 30,
  },

  name: {
    marginTop: 50,
    flexDirection: 'row',
  },

  nameInput: {
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 180,
    marginRight: 15,
    marginLeft: 15,
  },

  input: {
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
