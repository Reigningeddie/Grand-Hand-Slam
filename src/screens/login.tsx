import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {NavProps} from '../types/navigation';

export default function Login({navigation}: NavProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <Text style={styles.logoTxt}>Logo</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor="#1B1B1B"
        value={email}
        onChangeText={input => setEmail(input)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={'password'}
        value={password}
        onChangeText={input => setPassword(input)}
        placeholderTextColor="#1B1B1B"
      />
      <Pressable
        style={styles.LoginBtn}
        onPress={() =>
          console.log(`[email:] ${email}`, `[password:] ${password}`)
        }>
        <Text style={styles.loginTxt}>Login</Text>
      </Pressable>
      <Text style={styles.text}>
        Don't have an account?
        <Text
          style={styles.signUpTxt}
          onPress={() => navigation.navigate('SignUp')}>
          {' '}
          SignUp
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F3F4',
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
    color: '#1B1B1B',
    fontSize: 30,
  },

  input: {
    color: '#1B1B1B',
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
    color: '#1B1B1B',
  },

  signUpTxt: {
    color: '#2EA1DD',
  },
});
