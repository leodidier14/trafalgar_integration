import './style.css'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

gsap.fromTo(".header__logo__ellipse", {x: -100}, {x: 0, duration: 1});
gsap.to(".header__logo__ellipse", {duration: 1, rotation: 360});

gsap.fromTo(".hero__left", {x: -100}, {x: 0, duration: 1, delay: 1});
gsap.fromTo(".hero__left", {opacity: 0}, {opacity: 1, duration: 0.5, delay: 1});

gsap.fromTo(".hero__right", {x: 100}, {x: 0, duration: 1, delay: 1});
gsap.fromTo(".hero__right", {opacity: 0}, {opacity: 1, duration: 0.5, delay: 1});

gsap.fromTo(".services",
    {
        opacity: 0,
    },
    {
        scrollTrigger: ".services__service",
        opacity: 1,
        duration: 1
    }
);

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
