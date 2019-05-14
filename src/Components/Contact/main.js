var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyBRUEs1-aq5dJMou8YPFL3KO6cXCaxlyp8",
    authDomain: "examensarbete-9b875.firebaseapp.com",
    databaseURL: "https://examensarbete-9b875.firebaseio.com",
    projectId: "examensarbete-9b875",
    storageBucket: "examensarbete-9b875.appspot.com",
    messagingSenderId: "133354807692",
    appId: "1:133354807692:web:584c0f78b517706a"
  };
  firebase.initializeApp(firebaseConfig);

  //Reference messages collection

  let messagesRef = firebase.database().ref("messages");
  window.onload=function(){
    let el = document.getElementById("contactForm");
    if(el){
        el.addEventListener("submit", submitForm);
      }
  }

function submitForm (e){
    e.preventDefault();
    
    // Get values
    const name = getInputVal("exampleEmail");
    const email = getInputVal("examplePassword");
    const message = getInputVal("exampleText");

    // Save message
    saveMessage(name, email, message);

     // Show alert
  document.querySelector('.alert').style.display = 'unset';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('contactForm').reset();

}

//Function to get form values

function getInputVal(id){
return document.getElementById(id).value;
}

//Save messages to firebase

function saveMessage(name, email, message){
let newMessageRef =messagesRef.push();
newMessageRef.set({
name: name,
email: email,
message: message,
});
}