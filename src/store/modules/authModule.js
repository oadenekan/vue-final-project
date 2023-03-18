import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import router from "@/router/index";

const state = {
  user: null,
};

const mutations = {
  setUser(state, credentials) {
    state.user = credentials;
  },
};

const actions = {
  async getCurrentUser({ commit }) {
    try {
      const user = (resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          getAuth(),
          (user) => {
            unsubscribe();
            resolve(user);
          },
          reject
        );
      };
      commit("setUser", user);
      return user;
    } catch (error) {
      console.error(error);
    }
  },

  async login({ commit }, { email, password }) {
    try {
      const response = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      const credentials = {
        displayName: response.user.displayName
          ? response.user.displayName
          : "Anonymous",
        email: response.user.email ? response.user.email : "N/A",
        photoURL: response.user.photoURL ? response.user.photoURL : "",
      };
      commit("setUser", credentials);
      await router.push("/");
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-email":
          alert("Invalid email address");
          break;
        case "auth/user-not-found":
          alert("No account with that email was found!");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        default:
          alert(e.message.toString());
          break;
      }
    }
  },
  async signup({ commit }, { email, password }) {
    try {
      const response = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      console.log(response, "Firebase Auth response");
      const credentials = {
        displayName: response.user.displayName
          ? response.user.displayName
          : "Anonymous",
        email: response.user.email ? response.user.email : "N/A",
        photoURL: response.user.photoURL ? response.user.photoURL : "",
      };
      commit("setUser", credentials);
      await router.push("/");
    } catch (e) {
      console.log(e, "Firebase Auth error response");
    }
  },

  async logout({ commit }) {
    try {
      await signOut(getAuth());
      commit("setUser", null);
      await router.push("/");
    } catch (error) {
      console.log(error);
    }
  },
  async googleSignin({ commit }) {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(getAuth(), provider);
      console.log(response, "google");
      commit("setUser", response.user);
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  },
};

const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
  currentUser(state) {
    return state.user;
  },
};
const authModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default authModule;
