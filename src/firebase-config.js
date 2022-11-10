/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCpnS5SCmA4mDVtJopI-JPpr4DXKkOwrIQ",
  authDomain: "friendlychat-77700.firebaseapp.com",
  projectId: "friendlychat-77700",
  storageBucket: "friendlychat-77700.appspot.com",
  messagingSenderId: "115392359864",
  appId: "1:115392359864:web:a9c0c0dbf77e725271b34d"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}