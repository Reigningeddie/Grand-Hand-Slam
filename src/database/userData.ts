import firestore from '@react-native-firebase/firestore';
import {User} from '../types/navigation';

export const fetchUserData = async (): Promise<User[]> => {
  try {
    const collect = await firestore().collection('users').get();
    const data: User[] = [];
    collect.forEach(doc => {
      data.push({id: doc.id, ...doc.data()} as User);
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
