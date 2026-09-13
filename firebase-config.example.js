// Copy this file to firebase-config.js and fill in the values from your
// own Firebase project (Project settings > General > Your apps > web app).
//
// This config is NOT a secret in the way an API key for a paid service is:
// Firebase web config only identifies which project to talk to. Access
// control is enforced by your Firestore security rules (see README.md),
// not by hiding these values. It's normal for Firebase web apps to ship
// this file publicly.
window.DIO_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
