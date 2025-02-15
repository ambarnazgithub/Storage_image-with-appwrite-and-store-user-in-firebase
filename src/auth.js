import {
  auth,
  createUserWithEmailAndPassword,
  database,
  set,
  ref,
  onAuthStateChanged,
} from "./config.js";




const handleSignup = () => {
  const email = document.getElementById("email-signup").value;
  const password = document.getElementById("password-signup").value;

  if (email && password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
         console.log(userCredentials.user.uid);
        const usersRef = ref(database, `users/${userCredentials.user.uid}/`);
        set(usersRef, {
          email,
          createdAt: new Date().getTime(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const button = document.getElementById("signup-btn");
if (button) {
  button.addEventListener("click", handleSignup);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (window.location.pathname !== "/post.html") {
      window.location.href = "../post.html";
    }
  } else {
    if (window.location.pathname !== "/index.html") {
      window.location.href = "../index.html";
    }
  }
});

