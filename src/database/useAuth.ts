import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [metaData, setMetaData] =
    useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setMetaData(userState);

      if (loading) {
        setLoading(false);
      }
    });
  });

  const signIn = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.log(error.code);
      console.error(error.message);
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

  return {metaData, loading, signIn, signOut};
};
