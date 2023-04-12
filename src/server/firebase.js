import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
  apiKey: "AIzaSyCtH-L3U1hCxSZRq_ejT-lgGf4lJj5Q1as", // Add API Key
  databaseURL:"https://meet-clone-10-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var dbRef = firebase.database().ref();



export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  dbRef = dbRef.child(roomId);
} else {
  dbRef = dbRef.push();
  window.history.replaceState(null, "Meet", "?id=" + dbRef.key);
}

export default dbRef;

