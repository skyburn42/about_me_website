const translate = document.querySelectorAll(".translate")
const main = document.querySelector("main");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const portfolio = document.querySelector(".portfolio")
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let main_height = main.offsetHeight;
let section_height = section.offsetHeight;


window.addEventListener('scroll', () => {
let scroll = window.pageYOffset;
let sectionY = section.getBoundingClientRect();

translate.forEach(element => {
  let speed = element.dataset.speed;
  element.style.transform = 'translateY(${scroll * speed}px)';
})

opacity.forEach(element => {
  element.style.opacity = scroll / (sectionY.top + section_height);
})

shadow.style.height = '${scroll * 2.5 +300}px';

content.style.transform = 'translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)';
portfolio.style.transform = 'translateY(${scroll / (section_height + sectionY.top) * 50 + 50}px)';

border.style.width = '${scroll / (section_height + sectionY.top) * 80}%';
}) 