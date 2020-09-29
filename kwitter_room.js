var firebaseConfig = {
      apiKey: "AIzaSyCztWTcLoRd97ycXs2LRLIcZaLbHLLu9no",
      authDomain: "class-test-7e3b0.firebaseapp.com",
      databaseURL: "https://class-test-7e3b0.firebaseio.com",
      projectId: "class-test-7e3b0",
      storageBucket: "class-test-7e3b0.appspot.com",
      messagingSenderId: "431222142267",
      appId: "1:431222142267:web:7767819fd73f9a8750f31e"
    };
  
//ADD YOUR FIREBASE LINKS HERE


firebase.initializeApp(firebaseConfig);


var firebaseConfig = {
      apiKey: "AIzaSyCztWTcLoRd97ycXs2LRLIcZaLbHLLu9no",
      authDomain: "class-test-7e3b0.firebaseapp.com",
      databaseURL: "https://class-test-7e3b0.firebaseio.com",
      projectId: "class-test-7e3b0",
      storageBucket: "class-test-7e3b0.appspot.com",
      messagingSenderId: "431222142267",
      appId: "1:431222142267:web:7767819fd73f9a8750f31e"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();



function logout()
{
      window.location = "index.html"; 
}
