let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
  showSlides((slideIndex += n));
}

// Display logic
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

/**Akordion**/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/**hamburger**/
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", function (e) {
  navbar.classList.toggle("active-nav");
  hamburger.classList.toggle("active-nav");
});
document.addEventListener("click", function (e) {
  if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
    navbar.classList.remove("active-nav");
    hamburger.classList.remove("active-nav");
  }
});

/**Reveal**/
const reveals = document.querySelectorAll(".reveal");

function scrollReveal() {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100; // muncul pas 100px sebelum masuk layar

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", scrollReveal);
scrollReveal();

//******//VIDEO******//
const video = document.getElementById("bgVideo");
const btn = document.getElementById("pauseBtn");

btn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    btn.textContent = "⏸"; // ganti jadi icon pause
  } else {
    video.pause();
    btn.textContent = "▷"; // ganti jadi icon play
  }
});
