// ===== Typing Effect =====
const typingElement = document.getElementById("typing");
const textArray = ["Web Developer", "AI/ML Enthusiast", "Programmer", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, 500);
});

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ===== EmailJS Contact Form =====
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_jgy4bx8', 'template_0n9v178', this)
        .then(() => {
            alert("Message sent successfully!");
            form.reset(); // Clear the form
        }, (error) => {
            alert("Failed to send message: " + JSON.stringify(error));
        });
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
