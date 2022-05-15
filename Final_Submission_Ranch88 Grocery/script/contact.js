const firebaseConfig = {
    apiKey: "AIzaSyCeWE-RST3MC4FvFTXtXbzVj-Z51yKreKI",
    authDomain: "grocery-ef4fb.firebaseapp.com",
    projectId: "grocery-ef4fb",
    databaseURL: "https://grocery-ef4fb-default-rtdb.firebaseio.com/",
    storageBucket: "grocery-ef4fb.appspot.com",
    messagingSenderId: "661752653556",
    appId: "1:661752653556:web:a9c36dddfc685a9298a0a1"
  };

const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 

function send(){ 
    var email = document.getElementById("email").value; 
    var number = document.getElementById("number").value; 
    var FullName = document.getElementById("FullName").value; 
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    detailsRef.push().set({ 
      email: email, 
      number: number, 
      FullName: FullName, 
      subject: subject,
      message: message,
    });

}