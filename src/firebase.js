import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfONIMBZXD23hq0BsZpZweyxUFrgpjYKk",
    authDomain: "linkedin-clone-c3570.firebaseapp.com",
    projectId: "linkedin-clone-c3570",
    storageBucket: "linkedin-clone-c3570.appspot.com",
    messagingSenderId: "102539381479",
    appId: "1:102539381479:web:ce7fc4bf9cc97281bf7042"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };