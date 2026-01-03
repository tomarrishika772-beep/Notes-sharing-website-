// ===============================
// SMOOTH SCROLL FOR NAVBAR LINKS
// ===============================
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href");

    if (sectionId !== "#") {
      document.querySelector(sectionId)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===============================
// ACTIVE NAVBAR LINK ON CLICK
// ===============================
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// ===============================
// CONTACT FORM VALIDATION
// ===============================
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // reload stop

  const inputs = form.querySelectorAll("input");
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const phone = inputs[2].value.trim();
  const subject = inputs[3].value.trim();
  const message = form.querySelector("textarea").value.trim();

  // Empty field check
  if (!name || !email || !phone || !subject) {
    alert("⚠ Please fill all required fields");
    return;
  }

  // Email validation
  if (!isValidEmail(email)) {
    alert("❌ Invalid email format");
    return;
  }

  // Phone validation
  if (phone.length !== 10 || isNaN(phone)) {
    alert("📞 Enter a valid 10-digit mobile number");
    return;
  }

  // Success message
  alert("✅ Thank you! Your message has been sent successfully.");

  // Reset form
  form.reset();
});


// ===============================
// EMAIL VALIDATION FUNCTION
// ===============================
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// ===============================
// READ MORE BUTTON ACTION
// ===============================
const readMoreButtons = document.querySelectorAll(".btn-small");

readMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("📘 Course details will be available soon!");
  });
});


// ===============================
// WELCOME BUTTON ACTION
// ===============================
const welcomeBtn = document.querySelector(".hero .btn");

if (welcomeBtn) {
  welcomeBtn.addEventListener("click", () => {
    alert("🎓 Welcome to Mindora Education!");
  });
}


// ===============================
// SCROLL TO TOP BUTTON (AUTO)
// ===============================
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#b82c2c";
scrollBtn.style.color = "#fff";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
