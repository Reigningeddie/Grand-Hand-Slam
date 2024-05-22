import firestore from '@react-native-firebase/firestore';

const fetchData = async () => {
  try{
    const collect = await firestore().collection('users').get();
    const data = [];
    console.log(collect);
  }
}