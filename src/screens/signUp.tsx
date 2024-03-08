import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
  // Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
// import auth from '@react-native-firebase/auth';

const screenWidth = Dimensions.get('window').width;

const thirds = screenWidth / -1.3;

export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const [confirmPassword, setConfirmPassword] = useState('');

  // function verifyPassword() {
  //   if (password !== confirmPassword) {
  //     Alert.alert('passwords do not match.');
  //   } else {
  //     testSignUp();
  //   }
  // }

  // function testSignUp() {
  //   auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       Alert.alert('Welcome to Grand Hand Slam');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       Alert.alert('email already in use.');
  //     });
  // }

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
      <TextInput
        style={styles.input}
        placeholder={'Mobile Number'}
        placeholderTextColor="#1B1B1B"
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
        onPress={handleSubmit(data => console.log(data))}
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
