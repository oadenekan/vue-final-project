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
  apiKey: "AIzaSyBhyZg016IvAkJztRRQ4F3zGwsHt_TM-BM",
  authDomain: "my-vue-final-project.firebaseapp.com",
  projectId: "my-vue-final-project",
  storageBucket: "my-vue-final-project.appspot.com",
  messagingSenderId: "913147414144",
  appId: "1:913147414144:web:a1fc750974165fb9f6c865",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
