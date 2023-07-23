/* Import styles */
import "./styles.css";

/* Import locomotive-scroll */
import "locomotive-scroll/bundled/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

/* Locomotive scroll instance */
const locomotiveScroll = new LocomotiveScroll();

/* Progress Event */
const $JSProgressBox = document.getElementById("JSProgress");

window.addEventListener("progressEvent", (e) => {
  const { progress } = e.detail;
  $JSProgressBox.innerHTML = `Javascript Progress: ${progress}`;
  $JSProgressBox.style.opacity = 1 - progress;
});
