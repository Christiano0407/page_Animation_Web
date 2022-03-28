//** == Animation Page == */
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const logo = document.querySelector("#logo");
const hero = document.querySelector("#hero");
const burger = document.querySelector("#burger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(
  hero,
  1,
  { height: "0%" },
  { height: "80%", case: Power2.easeInOut },
  " < "
).fromTo(
  hero,
  1.2,
  { width: "100%" },
  { width: "80%", ease: Power2.easeInOut },
  "  <  "
);

tl.fromTo(logo, 0.5, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, "-=0.5");
tl.fromTo(burger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");
tl.fromTo(
  headline,
  0.5,
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0 },
  " -=0.5"
);
