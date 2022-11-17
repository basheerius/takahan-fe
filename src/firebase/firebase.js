import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import {MainStore} from "../store/MainStore";

const firebaseConfig = {
    apiKey: "AIzaSyAlVCVZn6nWxjw2-LOLi-sGOqo5MK-rx8E",
    authDomain: "takahan-62c45.firebaseapp.com",
    projectId: "takahan-62c45",
    storageBucket: "takahan-62c45.appspot.com",
    messagingSenderId: "96733065099",
    appId: "1:96733065099:web:503514dfa2c59dc2d5c98e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (e) {
        window.alert('Error' + e.message)
    }
}

const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        MainStore.setUser(res.user);
    } catch (e) {
        window.alert('Error' + e.message)
    }
}

const logout = async () => {
    try {
        await signOut(auth);
        MainStore.setUser(undefined);
    } catch (e) {
        window.alert('Error' + e.message)
    }
}

export default {
    register,
    login,
    logout
}
