import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa2NrWNQNcN2Y0jq5d9m7uqAbiOggFiYY",
  authDomain: "lightauth-ca6a7.firebaseapp.com",
  projectId: "lightauth-ca6a7",
  storageBucket: "lightauth-ca6a7.appspot.com",
  messagingSenderId: "303426404922",
  appId: "1:303426404922:web:2fa5207a820df27ec1eb03",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
