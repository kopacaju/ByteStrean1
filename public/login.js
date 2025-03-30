function login() {
    const { initializeApp } = firebase;
    const { getAnalytics } = firebase;
    const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Prihlásený používateľ: ", user);
            window.location.href = "Blog.html"; // Presmerovanie po úspešnom prihlásení
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('loginError').textContent = `Chyba pri prihlasovaní: ${errorMessage}`;
            console.error("Chyba pri prihlasovaní: ", errorCode, errorMessage);
        });
}