import {
  initializeAppCheck,
  6Lc_bSEuAAAAANJFbnDWxUQTNq5t7qvBvBskO2CM
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app-check.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOYyXf6ieMhcMNYgn1HBvxjAp3NEd6NDM",
  authDomain: "hassan-digital-solutions.firebaseapp.com",
  projectId: "hassan-digital-solutions",
  storageBucket: "hassan-digital-solutions.firebasestorage.app",
  messagingSenderId: "416480501753",
  appId: "1:416480501753:web:b18aa351f39dc9f1a22728",
  measurementId: "G-00N2S3HCS7"
};

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("SAKA_SITE_KEY_DINKA_A_NAN"),
  isTokenAutoRefreshEnabled: true
});
const db = getFirestore(app);

document.getElementById("bookingForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  try {
    await addDoc(collection(db, "bookings"), {
      customerName: name,
      service: service,
      details: details,
      createdAt: serverTimestamp()
    });

    alert("Booking submitted successfully!");

    document.getElementById("bookingForm").reset();

  } catch (error) {
    console.error("Booking error:", error);
    alert("Booking could not be submitted. Please try again later.");
  }
});
