// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmbz5xWeZBMEcET0wKlABAkHjIw6zQ8lE",
    authDomain: "veloura-skincare.firebaseapp.com",
    projectId: "veloura-skincare",
    storageBucket: "veloura-skincare.firebasestorage.app",
    messagingSenderId: "584061542888",
    appId: "1:584061542888:web:813e8d9efe19a9abf6845d",
    measurementId: "G-VM9C914JT4"
};


const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // عرض اسم المستخدم من localStorage
        const username = localStorage.getItem("username") || "User";
        document.getElementById("welcomeUser").textContent = `Welcome, ${username}`;
        document.getElementById("logoutButton").style.display = "inline-block";
    } else {
        // لو مش مسجل دخول، نرجعه لصفحة تسجيل الدخول
        window.location.href = "login.html";
    }
});

const container = document.getElementById("blogScroll");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

function updateScrollButtons() {
    const maxScroll = container.scrollWidth - container.clientWidth;
    const container = document.getElementById("blogScroll");


    if (container.scrollLeft > 10) {
        leftBtn.classList.add('show');
    } else {
        leftBtn.classList.remove('show');
    }

    if (container.scrollLeft < maxScroll - 10) {
        rightBtn.classList.add('show');
    } else {
        rightBtn.classList.remove('show');
    }
}

function scrollBlogs(direction) {
    const scrollAmount = 270;
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });

    setTimeout(updateScrollButtons, 400);
}

window.addEventListener('load', updateScrollButtons);
container.addEventListener('scroll', updateScrollButtons);


