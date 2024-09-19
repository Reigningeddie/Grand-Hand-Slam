// firebase.js
import {initializeApp} from '@react-native-firebase/app';

const firebaseConfig = {
  // Add your Firebase configuration here
};

const app = initializeApp(firebaseConfig);

export default app;

// Import the Admin SDK
import admin from 'firebase-admin';
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_CONFIG)),
});
