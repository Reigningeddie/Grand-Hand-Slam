import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {NavProps} from '../types/navigation';
import {useForm, Controller} from 'react-hook-form';

// import firestore from '@react-native-firebase/firestore';

//! check if client wants to know when users are online - (use initialize in firebase)
//*move phone number to settings from initial sign up component

export default function Login({navigation}: NavProps) {
  const {
    // handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  // const {metaData, signIn} = useAuth();

  // const loginUser = async (data: FieldValues) => {
  //   try {
  //     await signIn(data.email, data.password);
  //     if (!metaData) {
  //       Alert.alert('Incorrect credentials');
  //     } else {
  //       if (!metaData.emailVerified) {
  //         Alert.alert('Please verify your email before logging in');
  //       } else {
  //         navigation.navigate('BottomTabs');
  //       }
  //     }
  //   } catch (error: any) {
  //     console.error('Failed to sign in:', error);
  //   }
  // };

  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <Text style={styles.logoTxt}>Logo</Text>
      </View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={'E-mail'}
            placeholderTextColor="#1B1B1B"
            value={value}
            onChangeText={input => onChange(input)}
            onBlur={onBlur}
          />
        )}
        name="email"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.email && <Text style={styles.require}>*Required</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={'password'}
            value={value}
            onChangeText={input => onChange(input)}
            onBlur={onBlur}
            placeholderTextColor="#1B1B1B"
          />
        )}
        name="password"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.password && <Text style={styles.require}>*Required</Text>}
      <Pressable style={styles.LoginBtn}>
        <Text
          style={styles.loginTxt}
          onPress={() => navigation.navigate('BottomTabs')}>
          Login
        </Text>
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
  require: {
    color: 'red',
    marginTop: -15,
  },
});
