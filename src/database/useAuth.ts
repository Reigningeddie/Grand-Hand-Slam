import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
  });

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged(firebaseUser => {
  //     setUser(firebaseUser);
  //   });
  //   return unsubscribe;
  // }, []);

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

  return {user, loading, signIn, signOut};
};
