import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBRUEs1-aq5dJMou8YPFL3KO6cXCaxlyp8",
    authDomain: "examensarbete-9b875.firebaseapp.com",
    databaseURL: "https://examensarbete-9b875.firebaseio.com",
    projectId: "examensarbete-9b875",
    storageBucket: "examensarbete-9b875.appspot.com",
    messagingSenderId: "133354807692",
    appId: "1:133354807692:web:584c0f78b517706a"
  };
  const firebaseConf = firebase.initializeApp(config);

  export default firebaseConf

  