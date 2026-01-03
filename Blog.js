// Read More Buttons for Blog
const blogReadMore = document.querySelectorAll(".read-more");

blogReadMore.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Full article will be available soon! Stay tuned.");
  });
});
