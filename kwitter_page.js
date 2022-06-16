var firebaseConfig = {
      apiKey: "AIzaSyD0GxhBkuovJsm9PrbaKAWi0n86N2AWx-8",
      authDomain: "kwitter-a81f3.firebaseapp.com",
      databaseURL: "https://kwitter-a81f3-default-rtdb.firebaseio.com",
      projectId: "kwitter-a81f3",
      storageBucket: "kwitter-a81f3.appspot.com",
      messagingSenderId: "827263873123",
      appId: "1:827263873123:web:ec3ede7e8cb3976c4d4856"
    };
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem(user_name);
room_name=localStorage.getItem(room_name);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }

      function send(){
    msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
