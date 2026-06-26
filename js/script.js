/* ==========================================
   THE FITNESS HUB - script.js
========================================== */

/* ========= DARK MODE ========= */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    // Save user's preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme when page loads
window.addEventListener("load", function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

});

/* ========= CONTACT FORM VALIDATION ========= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
            alert("Please complete all the fields before submitting.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const phonePattern = /^[0-9]{10,13}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

       // Show success message
document.getElementById("successMessage").style.display = "block";

// Reset the form
form.reset();

// Hide the message after 5 seconds
setTimeout(function () {
    document.getElementById("successMessage").style.display = "none";
}, 5000);

    });

});

/* ========= BACK TO TOP BUTTON ========= */

window.onscroll = function () {

    const button = document.getElementById("topBtn");

    if (!button) return;

    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

};

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}