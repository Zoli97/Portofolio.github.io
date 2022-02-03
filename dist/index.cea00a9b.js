//1. the content come down and fade in when the browser loads
//come from -30%, opacity: 0(fade in) so its going to come from zero, come from -30
gsap.registerPlugin(ScrollTrigger);
//create timeline
var timeline = gsap.timeline();
timeline.from(".content", {
    y: "-30%",
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
});
//secvential vor veni pe baza clasei stagger unde am definit pe 3 elemente bazat pe distanta .3s
timeline.from(".stagger1 ", {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power3.easeOut,
    duration: 2
}, "-=1.5"); //offset delay
//going to come up fromb ottom up
timeline.from(".hero-design", {
    opacity: 0,
    y: 50,
    ease: Power3.easeOut,
    duration: 1
}, "-=2");
timeline.from(".about", {
    opacity: 1,
    y: 100,
    ease: Power2.ease,
    duration: 1
}, "-=1.5");
//or 10% of the current value
gsap.from(".square-anim", {
    stagger: 0.2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7)
});
//any element that has the transition2 class applied to it
//when the top of the transition2 reaches the bottom of the scroll bar its gonna animate
gsap.from(".transition2", {
    scrollTrigger: {
        trigger: ".transition2",
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3
});

//# sourceMappingURL=index.cea00a9b.js.map
