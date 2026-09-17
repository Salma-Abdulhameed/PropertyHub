import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import { auth, db } from "../firebase.js";

const loginForm = document.getElementById("propertyHubLoginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const uid = userCredential.user.uid;

        const userDoc = await getDoc(doc(db, "users", uid));

        if (!userDoc.exists()) {
            alert("User data not found.");
            return;
        }

        const userData = userDoc.data();

        if (userData.status === "blocked") {
            alert("Your account is blocked.");
            return;
        }

        if (userData.role === "admin") {
            window.location.href = "admin-dashboard.html";
        } else {
            window.location.href = "user-dashboard.html";
        }

    } catch (error) {
        alert("Invalid email or password.");
    }
});