
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = "";

//SignUp function

function signUp() {
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;


    const emailInputs = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneInputs = /^\d{10}$/;
    const cityInputs = /^[A-Za-z ]+$/;
    const passwordInputs = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



    if (!name || !email || !city || !phone || !password || !confirmPassword) {
        alert("All fields required");
        return;
    }
    let x = users.find((user) => {
        return user.email === email;
    });
    if (x) {
        alert("Already signUp with this email");
        return;
    }

    let newUser = {
        id: Date.now(),
        name,
        email,
        city,
        phone,
        password,


    };



    if (!emailInputs.test(email)) {
        alert("Invalid email format (example@mail.com)");
        return;
    }

    if (!phoneInputs.test(phone)) {
        alert("Phone number must contain 10 digits");
        return;
    }


    if (!cityInputs.test(city)) {
        alert("City must contain only alphabets");
        return;
    }

    if (!passwordInputs.test(password)) {
        alert("Password must contain letters and numbers (min 8 characters)");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }


    users.push(newUser);
    updateStorage();
    alert("Signup Successful");
}


//show passwod
function togglePassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }
}



function updateStorage() {

    localStorage.setItem("users", JSON.stringify(users));

}


//SgnIn function

function signIn() {

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;


    if (!email || !password) {
        return alert("fill all fields")
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];

    let x = users.find((user) => {
        return user.email === email;
    })

    if (!x) {
        return alert("You are not signed up. Please sign up first.");
    }

    let isValid = x.password == password;

    if (!isValid) {

        return alert("invalid credntial");
    }

    currentUser = x;

    localStorage.setItem('currentUser', JSON.stringify(currentUser))

    window.location.href = "travelapp.html";

}


// Check if user is logged in

function check() {
    let isLogged = JSON.parse(localStorage.getItem("currentUser"));
    if (!isLogged) {
        alert("Please login first!");
        window.location.href = "SignIn.html";
    }
}


// Logout function

function signOut() {
    localStorage.removeItem("currentUser");
    window.location.href = "SignIn.html";
}


let menuicon = document.getElementById("menuicon");
let links = document.getElementById("links");
menuicon.addEventListener("click", () => {
    links.classList.toggle("show");

});