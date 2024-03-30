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

// Image Selector JS (START)

let main_img = document.getElementById("main_img");
let sub_imgs = document.getElementsByClassName("sub_img");

for (let sub_img of sub_imgs) {
  sub_img.onclick = function () {
    main_img.style.opacity = "0";
    setTimeout(() => {
      main_img.setAttribute("src", this.getAttribute("src"));
      main_img.style.opacity = "1";
    }, 300);
  };
}

// Image Selector JS (END)
