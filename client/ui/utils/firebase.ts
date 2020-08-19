import firebase from "firebase";

const APIKEY = process.env.APIKEY as string;
const AUTHDOMAIN = process.env.AUTHDOMAIN as string;
const DATABASEURL = process.env.DATABASEURL as string;
const PROJECTID = process.env.PROJECTID as string;
const STORAGEBUCKET = process.env.STORAGEBUCKET as string;
const MESSAGINGSENDERID = process.env.MESSAGINGSENDERID as string;
const APPID = process.env.APPID as string;
const MEASUREMENTID = process.env.MEASUREMENTID as string;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyATNa-KrLi0w_T1-Hs2wbe3re1Zf9BCB-U",
//   authDomain: "slack-clone-de475.firebaseapp.com",
//   databaseURL: "https://slack-clone-de475.firebaseio.com",
//   projectId: "slack-clone-de475",
//   storageBucket: "slack-clone-de475.appspot.com",
//   messagingSenderId: "314949775599",
//   appId: "1:314949775599:web:156dfaf390e0dfd3206b1a",
//   measurementId: "G-H7Q8MEW61S",
// };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
