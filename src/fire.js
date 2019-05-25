import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyAVOv-t32jBqlYi9wqd8FMCMQddIk7q84k',
  authDomain: 'burgerqueen-fe5d7.firebaseapp.com',
  databaseURL: 'https://burgerqueen-fe5d7.firebaseio.com',
  projectId: 'burgerqueen-fe5d7',
  storageBucket: 'burgerqueen-fe5d7.appspot.com',
  messagingSenderId: '845851299921',
  appId: '1:845851299921:web:76e8d90cfe4c5db7'
}

const fire = firebase.initializeApp(firebaseConfig)

let firestore;

  firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      firestore = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

  export default fire
  export {firestore}