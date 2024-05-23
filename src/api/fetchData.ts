import firestore from '@react-native-firebase/firestore';

export const fetchData = async () => {
  try{
    const collect = await firestore().collection('users').get();
    console.log(collect);
  }