<<<<<<< HEAD
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username.length < 3 || password.length < 6) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid Input',
            text: 'Username must be at least 3 characters and password at least 6 characters.'
        });
        return;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!'
        });
        return;
    }

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // حفظ البيانات في Firestore
        await firebase.firestore().collection("users").doc(user.uid).set({
            username: username,
            email: email,
        });

        localStorage.setItem("username", username);

        Swal.fire({
            icon: 'success',
            title: 'Registration Complete!',
            text: 'Welcome to VELOURA!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "index.html";
        });

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: error.message
        });
    }
});
=======
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username.length < 3 || password.length < 6) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid Input',
            text: 'Username must be at least 3 characters and password at least 6 characters.'
        });
        return;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!'
        });
        return;
    }

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // حفظ البيانات في Firestore
        await firebase.firestore().collection("users").doc(user.uid).set({
            username: username,
            email: email,
        });

        localStorage.setItem("username", username);

        Swal.fire({
            icon: 'success',
            title: 'Registration Complete!',
            text: 'Welcome to VELOURA!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = "index.html";
        });

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: error.message
        });
    }
});
>>>>>>> 867aa743042926fe2d7b331ddf0420ffa175c2b7
