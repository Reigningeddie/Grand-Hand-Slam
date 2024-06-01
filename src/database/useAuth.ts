import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {MetaData} from '../types/navigation';

export const useAuth = () => {
  const [user, setUser] = useState<MetaData | null>();

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
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return {user, signIn, signOut};
};
