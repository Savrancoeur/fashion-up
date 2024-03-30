//  Search Input Change JS (START)
let search_input = document.getElementById("search-input");
let icon_items = document.getElementsByClassName("icon-item");

search_input.onfocus = function () {
  for (let item of icon_items) {
    item.style.display = "none";
  }

  this.style.width = "100%";
};

search_input.onblur = function () {
  for (let item of icon_items) {
    item.style.display = "block";
  }

  this.style.width = "65px";
};

// Search Input Change JS (END)

// Nav-Bar Background JS (START)

let nav = document.getElementById("nav");

window.onscroll = function () {
  if (window.pageYOffset > 500) {
    nav.classList.add("bg");
  } else {
    nav.classList.remove("bg");
  }
};

// Nav-Bar Background JS (END)

// Responsive Nav-Bar Toggle (START)

let hamburger = document.getElementById("hamburger");
let navbar_menu = document.getElementById("navbar-menu");
hamburger.addEventListener("click", function () {
  navbar_menu.classList.toggle("active");

  if (this.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
    this.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
  } else {
    this.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

// Responsive Nav-Bar Toggle (END)

// Slider Image (START)
const slider_img = document.getElementById("slider_img");
const prev_btn = document.getElementById("prev-btn");
const next_btn = document.getElementById("next-btn");

const images = ["header1.jpg", "header2.png", "header3.png", "header4.jpg"];
let idx = 0;

function prev() {
  idx = (idx - 1 + images.length) % images.length;
  slider_img.style.opacity = 0;

  setTimeout(function () {
    slider_img.src = "../images/photos/" + images[idx];
    slider_img.style.opacity = 1;
  }, 500);
}

function next() {
  idx = (idx + 1) % images.length;
  slider_img.style.opacity = 0;

  setTimeout(function () {
    slider_img.src = "../images/photos/" + images[idx];
    slider_img.style.opacity = 1;
  }, 500);
}

prev_btn.onclick = prev;
next_btn.onclick = next;

setInterval(next, "3000");

// Slider Image (END)

// Product Filter (START)

const all_btn = document.getElementById("all_btn");
const cloth_btn = document.getElementById("cloth_btn");
const sneaker_btn = document.getElementById("sneaker_btn");
const watch_btn = document.getElementById("watch_btn");

const cloth_cards = document.getElementsByClassName("cloth");
const sneaker_cards = document.getElementsByClassName("sneaker");
const watch_cards = document.getElementsByClassName("watch");

all_btn.onclick = function () {
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "block";
  }

  for (let sneaker_card of sneaker_cards) {
    sneaker_card.style.display = "block";
  }

  for (let watch_card of watch_cards) {
    watch_card.style.display = "block";
  }

  this.classList.add("active");
  cloth_btn.classList.remove("active");
  sneaker_btn.classList.remove("active");
  watch_btn.classList.remove("active");
};

cloth_btn.onclick = function () {
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "block";
  }

  for (let sneaker_card of sneaker_cards) {
    sneaker_card.style.display = "none";
  }

  for (let watch_card of watch_cards) {
    watch_card.style.display = "none";
  }

  all_btn.classList.remove("active");
  this.classList.add("active");
  sneaker_btn.classList.remove("active");
  watch_btn.classList.remove("active");
};

sneaker_btn.onclick = function () {
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "none";
  }

  for (let sneaker_card of sneaker_cards) {
    sneaker_card.style.display = "block";
  }

  for (let watch_card of watch_cards) {
    watch_card.style.display = "none";
  }

  all_btn.classList.remove("active");
  cloth_btn.classList.remove("active");
  this.classList.add("active");
  watch_btn.classList.remove("active");
};

watch_btn.onclick = function () {
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "none";
  }

  for (let sneaker_card of sneaker_cards) {
    sneaker_card.style.display = "none";
  }

  for (let watch_card of watch_cards) {
    watch_card.style.display = "block";
  }

  all_btn.classList.remove("active");
  cloth_btn.classList.remove("active");
  sneaker_btn.classList.remove("active");
  this.classList.add("active");
};

// Product Filter (END)
