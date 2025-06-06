// Toggle Navigation Menu with Resize Handling
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("visible");
}
document.querySelector(".menu-button").addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        document.querySelector("nav ul").classList.remove("visible");
    }
});

// Smooth Scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Filter Projects Efficiently
function filterProjects(category) {
    document.querySelectorAll(".project-card").forEach(card => {
        card.classList.toggle("hidden", card.dataset.category !== category && category !== "all");
    });
}



// Lightbox Effect with Keyboard Support
function openLightbox(imageSrc) {
    const lightbox = document.querySelector("#lightbox");
    const img = document.querySelector("#lightbox img");
    img.src = imageSrc;
    lightbox.style.display = "block";
    lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox(event) {
    if (event.type === "click" || (event.key === "Escape")) {
        document.querySelector("#lightbox").style.display = "none";
        document.querySelector("#lightbox").setAttribute("aria-hidden", "true");
    }
}
document.querySelector("#lightbox").addEventListener("click", closeLightbox);
document.addEventListener("keydown", closeLightbox);

// Form Validation with Inline Error Messages
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let message = document.querySelector("#message");

    let errors = [];

    if (!name.value.trim()) errors.push({ field: name, message: "Name is required." });
    if (!email.value.trim() || !email.value.includes("@")) errors.push({ field: email, message: "Valid email is required." });
    if (!message.value.trim()) errors.push({ field: message, message: "Message cannot be empty." });

    document.querySelectorAll(".error-msg").forEach(msg => msg.remove());

    if (errors.length > 0) {
        errors.forEach(err => {
            const errorMsg = document.createElement("p");
            errorMsg.classList.add("error-msg");
            errorMsg.style.color = "red";
            errorMsg.textContent = err.message;
            err.field.insertAdjacentElement("afterend", errorMsg);
        });
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});
