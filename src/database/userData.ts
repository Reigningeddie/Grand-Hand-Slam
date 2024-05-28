import firestore from '@react-native-firebase/firestore';

export const userData = async () => {
  try {
    const collect = await firestore().collection('users').get();
    const data: {id: string}[] = [];
    collect.forEach(doc => {
      data.push({id: doc.id, ...doc.data()});
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
