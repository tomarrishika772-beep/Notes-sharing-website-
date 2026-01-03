// Scroll Animation
const aboutText = document.querySelector(".about-text");
window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight / 1.2;
  const elementTop = aboutText.getBoundingClientRect().top;
  if (elementTop < triggerPoint) {
    aboutText.classList.add("show");
  }
});

// Optional Read More toggle
const readMoreBtn = document.getElementById("readMoreBtn");
readMoreBtn.addEventListener("click", () => {
  if (aboutText.style.maxHeight === "none") {
    aboutText.style.maxHeight = "400px";
    readMoreBtn.innerText = "Read More";
  } else {
    aboutText.style.maxHeight = "none";
    readMoreBtn.innerText = "Read Less";
  }
});

// Optional: Alert on Founder click
const founder = document.querySelector(".about-text p strong");
founder.addEventListener("click", () => {
  alert("Welcome to Mindora Education! ");
});
