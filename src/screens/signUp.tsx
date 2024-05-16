import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
  Alert,
} from 'react-native';
import {NavProps} from '../types/navigation';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';

const screenWidth = Dimensions.get('window').width;

const thirds = screenWidth / -1.3;

export default function SignUp({navigation}: NavProps) {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();

  function verifyPassword(data: FieldValues) {
    if (data.password !== data.confirmPassword) {
      Alert.alert('passwords do not match.');
    } else if (data.password.length < 8) {
      Alert.alert('password must contain at least 8 characters.');
    } else {
      signUp(data);
    }
  }

  const signUp = async (data: FieldValues) => {
    try {
      console.log(data);
      const createUser = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );
      if (createUser.user) {
        console.log(createUser.user.uid);
        Alert.alert('Welcome to Grand Hand Slam', 'Please verify e-mail.', [
          {
            text: 'ok',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
        await createUser.user.sendEmailVerification();
      }
    } catch (err: any) {
      console.log(err.code);
      console.log(err.message);
      if (err.code === 'auth/invalid-email') {
        Alert.alert('Not a verified e-mail');
      } else if (err.code === 'auth/email-already-in-use') {
        Alert.alert('e-mail already signed up. try resetting your password.');
      }
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.txt}>Let's get you signed up!</Text>
      <View style={styles.name}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.nameInput}
              placeholder={'First Name'}
              placeholderTextColor="#1B1B1B"
              value={value}
              onChangeText={input => onChange(input)}
            />
          )}
          name="firstName"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.nameInput}
              placeholder={'Last Name'}
              placeholderTextColor="#1B1B1B"
              value={value}
              onChangeText={input => onChange(input)}
            />
          )}
          name="lastName"
          defaultValue=""
        />
      </View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={'Create a User Name'}
            placeholderTextColor="#1B1B1B"
            value={value}
            onChangeText={input => onChange(input)}
            onBlur={onBlur}
          />
        )}
        name="username"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.username && <Text style={styles.require}>*Required</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={input => onChange(input)}
            onBlur={onBlur}
            placeholder={'Email'}
            placeholderTextColor="#1B1B1B"
          />
        )}
        name="email"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.email && <Text style={styles.require}>*Required</Text>}
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={'Mobile Number'}
            placeholderTextColor="#1B1B1B"
            value={value}
            onChangeText={input => onChange(input)}
          />
        )}
        name="mobileNumber"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={'New Password'}
            secureTextEntry={true}
            placeholderTextColor="#1B1B1B"
            value={value}
            onChangeText={input => onChange(input)}
            onBlur={onBlur}
          />
        )}
        name="password"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.password && <Text style={styles.require}>*Required</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            placeholderTextColor="#1B1B1B"
            value={value}
            onChangeText={input => onChange(input)}
            onBlur={onBlur}
          />
        )}
        name="confirmPassword"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.confirmPassword && <Text style={styles.require}>*Required</Text>}
      <Pressable
        onPress={handleSubmit(data => verifyPassword(data))}
        style={styles.btn}>
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

  require: {
    color: 'red',
    marginLeft: thirds,
  },
});
