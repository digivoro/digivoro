import * as firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../../config/firebaseConfig";

let firebaseApp = firebase.initializeApp(firebaseConfig);
let fireDb = firebaseApp.firestore();

export { fireDb };
