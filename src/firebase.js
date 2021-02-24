import firebase from 'firebase/app';
import 'firebase/firestore'


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAKb42LXaTTOcUvAPuPL8mWTV_7eHlQgVE",
  authDomain: "ugurturkmen-9bc00.firebaseapp.com",
  projectId: "ugurturkmen-9bc00",
  storageBucket: "ugurturkmen-9bc00.appspot.com",
  messagingSenderId: "977682446414",
  appId: "1:977682446414:web:5d741945a4b4c3dd9a2b1f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase