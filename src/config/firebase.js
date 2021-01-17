import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'jornadadocv.firebaseapp.com',
  projectId: 'jornadadocv',
  databaseURL: 'https://jornadadocv-default-rtdb.firebaseio.com',
  storageBucket: 'jornadadocv.appspot.com',
  messagingSenderId: '453398461456',
  appId: '1:453398461456:web:5d25f520ff3cd17b7bde95',
  measurementId: 'G-K86BGEWB33',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
