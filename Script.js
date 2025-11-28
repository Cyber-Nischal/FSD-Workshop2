const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', expanded);
    menuButton.innerHTML = expanded ? "✕" : "☰";
});

// Contact form validation
const form = document.getElementById("contact-form-id");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all required fields.";
    } else {
        formMessage.style.color = "lightgreen";
        formMessage.textContent = "Thank you! I will reply soon.";
        form.reset();
    }
});
