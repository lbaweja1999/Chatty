import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyCZrf7F3sJ4JBeiGZuRGWbREHq0n_fddVk",
    authDomain: "chatty-302bb.firebaseapp.com",
    databaseURL: "https://chatty-302bb.firebaseio.com",
  
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
