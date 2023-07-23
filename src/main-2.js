/* Import styles */
import "./styles-2.css";

/* Import locomotive-scroll */
import "locomotive-scroll/bundled/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

/* Locomotive scroll instance */
const locomotiveScroll = new LocomotiveScroll();

// /* Progress Event */
// // const $JSProgressBox = document.getElementById("JSProgress");
// const $JSProgressBox = document.querySelectorAll("#JSProgress")

window.addEventListener("progressEvent", (e) => {
  const { progress, target } = e.detail;
  target.innerHTML = `Javascript Progress: ${progress}`;
  // target.style.opacity = 1 - progress;

  const xxx = "-20";
  const progressN = 1 - progress;
  const initScale = 0.85;
  const stepScale = 1 - initScale;
  const translateY = xxx * progressN;
  const scale = initScale + progress * stepScale;
  const opacity = scale;

  target.style.transform = `translateY(${translateY}%) scale(${scale})`;
  target.style.opacity = `${scale}`;
});

/* Custom event */
window.addEventListener("scrollEvent", (e) => {
  console.log("bip");

  const { target, way, from } = e.detail;

  console.log(way);
  console.log(from);
  // console.log(target);

  // target.innerHTML = `Javascript Progress: ${from}`;

  if (way === "enter") {
    target.style.opacity = "1";
  } else {
    target.style.opacity = "0.5";
  }
});


// --xxx: -60%;
// --init-scale: 0.8;
// --step-scale: calc(1 - var(--init-scale));

// --progress-n: calc(1 - var(--progress));
// --t-y: calc(var(--xxx) * var(--progress-n));
// --scale: calc(var(--init-scale) + (var(--progress) * var(--step-scale)));
// opacity: var(--scale);
// transform: translateY(var(--t-y)) scale(var(--scale));
