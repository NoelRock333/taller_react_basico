import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDFq2m0D9ZdOuWqFCbAzAoUtYtMeMXgMDY",
  authDomain: "curso-react-928c8.firebaseapp.com",
  databaseURL: "https://curso-react-928c8.firebaseio.com",
  projectId: "curso-react-928c8",
  storageBucket: "",
  messagingSenderId: "763318901782"
};
var fire = firebase.initializeApp(config);
export default fire;