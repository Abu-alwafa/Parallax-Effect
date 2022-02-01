let navLinks = document.querySelectorAll(".navbar li a");
let moon = document.querySelector(".moon");
let stars = document.querySelector(".stars");
let mountains1 = document.querySelector(".mountains1");
let river = document.querySelector(".river");
let mountains2 = document.querySelector(".mountains2");
let boat = document.querySelector(".boat");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

onscroll = () => {
  if (screen.width > 768) {
    moon.style.top = scrollY * 1.5 + "px";
    stars.style.left = scrollY * 0.3 + "px";
    mountains1.style.top = scrollY * 0.5 + "px";
    mountains2.style.top = scrollY * 0.2 + "px";
    river.style.top = scrollY * 0.2 + "px";
    boat.style.top = scrollY * 0.2 + "px";
    boat.style.left = scrollY * 1.2 + "px";

    if (scrollY >= 300) {
      moon.style.display = "none";
      document.body.style.background = "linear-gradient(#5ac5d3, black)";
    } else {
      moon.style.display = "block";
      document.body.style.background =
        "linear-gradient(rgb(122, 1, 122), black)";
    }
  }
};
