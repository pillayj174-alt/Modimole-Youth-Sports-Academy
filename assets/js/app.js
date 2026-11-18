// MYSA website interactions. Configure the official email address below before launch.
const MYSA_CONTACT_EMAIL = "REPLACE-WITH-OFFICIAL-MYSA-EMAIL@example.com";

const menu = document.getElementById("menu");
const links = document.getElementById("navlinks");
if (menu && links) {
  menu.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => links.classList.remove("open")));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Static GitHub Pages sites do not process form submissions. This opens the
// visitor's email application until you connect a form service/backend.
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (MYSA_CONTACT_EMAIL.startsWith("REPLACE-")) {
      alert("Please configure the official MYSA contact email in assets/js/app.js before using this form.");
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`MYSA website enquiry: ${data.get("interest")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterest: ${data.get("interest")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:${MYSA_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
