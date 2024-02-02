import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

export default function login() {
  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <Text style={styles.logoTxt}>Logo</Text>
      </View>
      <TextInput style={styles.input} placeholder={'Username'} />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={'password'}
      />
      <Pressable style={styles.LoginBtn}>
        <Text style={styles.loginTxt}>Login</Text>
      </Pressable>
      <Text style={styles.text}>
        Don't have an account?
        <Text style={styles.signUpTxt}>Sign Up</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    borderWidth: 5,
    marginBottom: 50,
    height: 150,
    width: 150,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoTxt: {
    color: 'aliceblue',
    fontSize: 30,
  },

  input: {
    fontSize: 15,
    borderWidth: 2,
    height: 40,
    paddingLeft: 10,
    width: 200,
    borderRadius: 5,
    marginBottom: 15,
  },

  LoginBtn: {
    backgroundColor: '#2EA1DD',
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 8,
  },

  loginTxt: {
    fontSize: 15,
    color: 'aliceblue',
  },

  text: {
    fontSize: 14,
  },

  signUpTxt: {
    color: '#2EA1DD',
  },
});
