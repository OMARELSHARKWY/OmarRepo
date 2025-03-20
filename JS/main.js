// Task 1 Lap 5

let input = document.getElementById("inputText");
let display = document.getElementById("displayText");

input.addEventListener("input", function() {
    display.textContent = input.value;
});


// Task 2 Lap 5

document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;

    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    let email = document.getElementById("email").value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    let password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById("genderError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("genderError").style.display = "none";
    }

    let sportsChecked = document.querySelectorAll(".sports:checked");
    if (sportsChecked.length < 2) {
        document.getElementById("sportsError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("sportsError").style.display = "none";
    }

    let country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("countryError").style.display = "none";
    }

    if (!isValid) {
        event.preventDefault(); 
    } else {
        alert("Form submitted successfully!");
    }
});

document.querySelector(".reset").addEventListener("click", function() {
    document.querySelectorAll(".error").forEach(error => {
        error.style.display = "none";
    });
});

// Task 3 Lap 5

// Task 4 Lap 5

// document.addEventListener("keydown", function(event) {
//     alert(`Key: ${event.key}, ASCII Code: ${event.keyCode}`);

//     if (event.altKey) alert("Alt key is pressed!");
//     if (event.ctrlKey) alert("Ctrl key is pressed!");
//     if (event.shiftKey) alert("Shift key is pressed!");
// });

// Task 5 Lap 5

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled!");
});

