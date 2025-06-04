const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}
prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
});
nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateSlide();
});

// 模擬頁面切換
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.style.display = "none");
  document.getElementById(pageId).style.display = "block";
}