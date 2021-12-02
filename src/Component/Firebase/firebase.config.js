const firebaseConfig = {
  apiKey:process.env.REACT_FIREBASE_AUTH_API_KEY,
  authDomain:process.env.REACT_FIREBASE_AUTH_AUTH_DOMAIN, 
  projectId:process.env.REACT_FIREBASE_AUTH_PROJECT_ID, 
  storageBucket:process.env.REACT_FIREBASE_AUTH_STORAGE, 
  messagingSenderId: process.env.REACT_FIREBASE_AUTH_MESSAGING_SENDERID,
  appId:process.env.REACT_FIREBASE_AUTH_APP_ID,
};
export default firebaseConfig;