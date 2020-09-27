import firebase from 'firebase'

var firebaseConfig = {
      apiKey: "AIzaSyAVwnn8Tb2MuiTuhy8iqkyOnG2viIdMIUI",
      authDomain: "flashcard-self-created.firebaseapp.com",
      databaseURL: "https://flashcard-self-created.firebaseio.com",
      projectId: "flashcard-self-created",
      storageBucket: "flashcard-self-created.appspot.com",
      messagingSenderId: "839329952349",
      appId: "1:839329952349:web:a077bbdda574945deed3b4",
      measurementId: "G-S2J416G4JV"
  };
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
