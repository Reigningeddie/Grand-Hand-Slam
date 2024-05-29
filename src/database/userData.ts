import firestore from '@react-native-firebase/firestore';
import {UserData} from '../types/navigation';

export const userData = async (): Promise<UserData[]> => {
  try {
    const collect = await firestore().collection('users').get();
    const data: UserData[] = [];
    collect.forEach(doc => {
      data.push({id: doc.id, ...doc.data()} as UserData);
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
