
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        const userDoc = await firebase.firestore().collection("users").doc(user.uid).get();
        const username = userDoc.exists ? userDoc.data().username : "User";

        localStorage.setItem("username", username);

        Swal.fire({
            icon: "success",
            title: "Welcome back, " + username + "!",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "index.html";
        });

    } catch (error) {
        console.error("Login error:", error.message);
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: error.message,
        });
    }
});
