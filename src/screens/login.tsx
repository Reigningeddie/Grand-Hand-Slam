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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const {login, signUp} = useAuth();

  const handleLogin = async () => {
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

  const handleSignUp = async () => {
    if (passwordValue !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const {data, error} = await signUp(emailValue, passwordValue);
      if (error && typeof error.message === 'string') {
        throw new Error(`Sign Up error: ${error.message}`);
      }
      console.log('Sign up successful!', data);
      Alert.alert('Sign up successful, confirm email then sign in')
      setIsSignUp(false);
    } catch (error: any) {
      console.log('Sign up failed', error);
      Alert.alert('Sign up failed', error.message);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <Text style={styles.logoTxt}>Logo</Text>
      </View>
      {isSignUp && <Text style={styles.signUp}>Sign Up</Text>}
      <TextInput
        style={styles.input}
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
        {isSignUp && (
          <TextInput
            style={styles.input}
            placeholder={'Confirm Password'}
            placeholderTextColor='#1B1B1B'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}/>
            )}
      <Pressable style={styles.LoginBtn} onPress={isSignUp ? handleSignUp : handleLogin}>
        <Text style={styles.loginTxt}>{isSignUp ? 'SignUp' : 'Login'}</Text>
      </Pressable>

      <Text style={styles.text}>
        {isSignUp ? `Already have an account?` : `Don't have an account?`}
        {isSignUp ? (
          <Text
          style={styles.signUpTxt}
          onPress={() => setIsSignUp(!isSignUp)}>
          {' '}
          Sign Up
        </Text>) : 
          <Text
          style={styles.signUpTxt}
          onPress={() => setIsSignUp(!isSignUp)}>
            {' '}
            Log in
        </Text>}
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

  signUp: {
    fontSize: 24,
    marginBottom: 16,
    color: '#1B1B1B'
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
