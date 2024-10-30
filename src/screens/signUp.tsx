import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
  Alert
} from 'react-native';
import type {NavProps} from '../types/navigation';
import {useAuth} from '../database/authContext';

const screenWidth = Dimensions.get('window').width;
const thirds = screenWidth / -1.3;

export default function SignUp({navigation}: NavProps): React.JSX.Element {
  const [firstName, setFirst] = useState<string>('');
  const [lastName, setLast] = useState<string | undefined>(undefined);
  const [userName, setUser] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string>('');
  const [mobileNumber, setNumber] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string>('');

  const {signUp} = useAuth();

  const handleSubmit = async() => {
    try {
      const userData = {
        email,
        password,
      };

      const {data, error} = await signUp(email, password);

      if (error) {
        console.error('Error signing up:', error);
        Alert.alert(error.message);
        return;
      }
      console.log('User signed up successfully:', data);
      navigation.navigate('Login')
    } catch (error: any) {
      console.error('Error during sign up:', error);
      Alert.alert(error.message)
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.txt}>Let's get you signed up!</Text>
      <View style={styles.name}>
            <TextInput
              style={styles.nameInput}
              placeholder={'First Name'}
              placeholderTextColor="#1B1B1B"
              value={firstName}
              onChangeText={input => setFirst(input)}
            />
            <TextInput
              style={styles.nameInput}
              placeholder={'Last Name'}
              placeholderTextColor="#1B1B1B"
              value={lastName}
              onChangeText={input => setLast(input)}
            />
      </View>
          <TextInput
            style={styles.input}
            placeholder={'Create a User Name'}
            placeholderTextColor="#1B1B1B"
            value={userName}
            onChangeText={input => setUser(input)}
          />
      {/* {errors.username && <Text style={styles.require}>*Required</Text>} */}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={input => setEmail(input)}
            placeholder={'Email'}
            placeholderTextColor="#1B1B1B"
          />
      {/* {errors.email && <Text style={styles.require}>*Required</Text>} */}
          <TextInput
            style={styles.input}
            placeholder={'Mobile Number'}
            placeholderTextColor="#1B1B1B"
            value={mobileNumber}
            onChangeText={input => setNumber(input)}
          />
          <TextInput
            style={styles.input}
            placeholder={'New Password'}
            secureTextEntry={true}
            placeholderTextColor="#1B1B1B"
            value={password}
            onChangeText={input => setPassword(input)}
          />
      {/* {errors.password && <Text style={styles.require}>*Required</Text>} */}
          {/* <TextInput
            style={styles.input}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            placeholderTextColor="#1B1B1B"
            value={value}
            onChangeText={input => onChange(input)}
            onBlur={onBlur}
          />
      {errors.confirmPassword && <Text style={styles.require}>*Required</Text>} */}
      <Pressable style={styles.btn} onPress={handleSubmit}>
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
