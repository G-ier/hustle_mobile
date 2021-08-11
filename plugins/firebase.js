import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDWT-xu540mQ21sGjXiXpRpeNlyEkw6d5w",
    authDomain: "fertility-1e091.firebaseapp.com",
    databaseURL: "https://fertility-1e091.firebaseio.com",
    projectId: "fertility-1e091",
    storageBucket: "fertility-1e091.appspot.com",
    messagingSenderId: "1051596148866",
    appId: "1:1051596148866:web:7d7361845e954f9ec7249b",
    measurementId: "G-X2WM21PHYG"
  };
  // Initialize Firebase
  let app = null;
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    
  }
  
  export default firebase