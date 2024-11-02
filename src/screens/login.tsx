import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import type {NavProps} from '../types/types';
import {useAuth} from '../database/authContext';

export default function Login({navigation}: NavProps): React.JSX.Element {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  const {login} = useAuth();

  const loginUser = async () => {
    try {
      const {data, error} = await login(emailValue, passwordValue);
      if (error && typeof error.message === 'string') {
        if (error.message.includes('Invalid login credential')) {
          throw new Error('Invalid login credential');
        }
        throw new Error(`Authentication error: ${error.message}`);
      }
      if (!data.session) {
        throw new Error('No session returned after login');
      }
      console.log('Login successful!');
      navigation.navigate('BottomTabs');
    } catch (error: any) {
      console.log('Login failed:', error);
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <Text style={styles.logoTxt}>Logo</Text>
      </View>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={'E-mail'}
        placeholderTextColor="#1B1B1B"
        value={emailValue}
        onChangeText={input => 
          setEmail(input)}/>

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={'Password'}
        placeholderTextColor="#1B1B1B"
        value={passwordValue}
        onChangeText={input => setPassword(input)}/>

      <Pressable style={styles.LoginBtn} onPress={loginUser}>
        <Text style={styles.loginTxt}>Login</Text>
      </Pressable>

      <Text style={styles.text}>
        Don't have an account?
        <Text
          style={styles.signUpTxt}
          onPress={() => navigation.navigate('SignUp')}>
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
  require: {
    color: 'red',
    marginTop: -15,
  },
});
