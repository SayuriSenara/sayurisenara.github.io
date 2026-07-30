const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const roles = [
  "Computer Science Student",
  "Web Developer",
  "Frontend Developer",
  "Problem Solver",
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  const typingText = document.getElementById("typing-text");

  currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex++);
  } else {
    typingText.textContent = currentRole.substring(0, charIndex--);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Initialize EmailJS
emailjs.init("WR92G5-8rS4ovRco3");

// Contact Form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("form-message");

    emailjs
      .sendForm("service_qwbdcq7", "template_urvm3s5", this)
      .then(() => {
        message.textContent =
          "Thank you for reaching out. I'll get back to you soon.";

        message.className = "success";

        this.reset();

        setTimeout(() => {
          message.textContent = "";
          message.className = "";
        }, 5000);
      })
      .catch((error) => {
        message.textContent = "Failed to send message. Please try again.";

        message.className = "error";

        console.error(error);

        setTimeout(() => {
          message.textContent = "";
          message.className = "";
        }, 5000);
      });
  });

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
