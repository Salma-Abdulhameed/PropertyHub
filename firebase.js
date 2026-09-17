import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAVWBCxhKgb4P7PRmwAeiBB7FOp-f2Megw",
    authDomain: "propertyhub-c048e.firebaseapp.com",
    projectId: "propertyhub-c048e",
    storageBucket: "propertyhub-c048e.firebasestorage.app",
    messagingSenderId: "1053206969385",
    appId: "1:1053206969385:web:2740113663c9d7009ab038"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);