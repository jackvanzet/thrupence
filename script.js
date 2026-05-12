// Hero image fade.
// Add more images in index.html by duplicating the .fadeImage line inside .imageFade.
// The script will automatically include them in the rotation.

const fadeImages = Array.from(document.querySelectorAll(".fadeImage"));
let currentIndex = 0;

if (fadeImages.length > 1) {
  setInterval(() => {
    fadeImages[currentIndex].classList.remove("is-active");
    currentIndex = (currentIndex + 1) % fadeImages.length;
    fadeImages[currentIndex].classList.add("is-active");
  }, 3000);
}
