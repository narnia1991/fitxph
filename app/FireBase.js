import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCmSjdDvCj4BWXMce8ULiIY3GU3pIMSmIo",
  authDomain: "fitx-ph.firebaseapp.com",
  databaseURL: "https://fitx-ph.firebaseio.com",
  storageBucket: "fitx-ph.appspot.com"
};

let instance = null;

const firebaseService = firebase.initializeApp(config);
export default firebaseService;

export const restoreSession = async () => {
  try {
    const user = await firebaseService.auth().onAuthStateChanged(user => {
      if (user) {
        return user;
      } else {
        return false;
      }
    });
    if (!user) return false;
    return user;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await firebaseService
      .auth()
      .signInWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const signupUser = async (email, password) => {
  try {
    const user = await firebaseService
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const logoutUser = async () => {
  try {
    const data = await firebaseService.auth().signOut();
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const anonymousSignIn = async () => {
  return await firebaseService
    .auth()
    .signInAnonymously()
    .catch(error => {
      console.log(error);
    });
};

export const setSyncData = async (key, value) => {
  try {
    return await firebaseService
      .database()
      .ref(key)
      .set(value);
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const getSyncData = async key => {
  try {
    return await firebaseService.database().ref(key);
  } catch (err) {
    console.log(err.message);
    return false;
  }
};
