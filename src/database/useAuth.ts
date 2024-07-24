import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const useAuth = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.error(error.code);
      console.error(error.message);
      if (error.code === 'auth/invalid-email') {
        Alert.alert('No user with that E-mail was found');
      } else if (error.code === 'auth/invalid-credential') {
        Alert.alert('E-mail or password is incorrect.');
      }
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      console.log('goodbye');
    } catch (error) {
      console.error(error);
    }
  };

  return {user, signIn, signOut};
};
