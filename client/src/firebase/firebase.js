import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyDCN5YXm-FcXvZHbYSQj4N6dgUnq8x1sNs",
    authDomain: "cpr-final-project-production.firebaseapp.com",
    databaseURL: "https://cpr-final-project-production.firebaseio.com",
    projectId: "cpr-final-project-production",
    storageBucket: "cpr-final-project-production.appspot.com",
    messagingSenderId: "825687295032"
};

const devConfig = {
    apiKey: "AIzaSyDJRgDkO4oL4ovHJsMG9nXAPpclVfZV_Dk",
    authDomain: "cpr-final-project.firebaseapp.com",
    databaseURL: "https://cpr-final-project.firebaseio.com",
    projectId: "cpr-final-project",
    storageBucket: "cpr-final-project.appspot.com",
    messagingSenderId: "788266091117"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};