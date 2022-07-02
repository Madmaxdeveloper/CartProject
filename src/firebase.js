import  firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQPORhHnmFLxIeQ1bDT-7fuC60SDsYUro",
  authDomain: "cart-a4ea8.firebaseapp.com",
  projectId: "cart-a4ea8",
  storageBucket: "cart-a4ea8.appspot.com",
  messagingSenderId: "301139489359",
  appId: "1:301139489359:web:9b04561ede59229987703a"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()