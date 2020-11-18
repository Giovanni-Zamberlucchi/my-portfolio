// RESIZE NAV
$("#toggle").click(function() {
$(this).toggleClass('on');
$("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
$(this).toggleClass('on');
$("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
$(this).toggleClass('on');
$("#resize").toggleClass("active");
});

//ANIM NAV
gsap.from("#brand", {duration: 1, delay: 1, y: 10, opacity: 0, ease: Expo.easeInOut})

gsap.from("#menu li a", {duration: 1, delay: 1, opacity: 0, ease: Expo.easeInOut, stagger: 0.3});

// TYPEWRITING
const words = ["is intelligence made visible.", "is not about typing. It's about thinking.", "is thinking made visual.", "is so simple that's why it's so complicated.",
"is the silent ambassador of your brand.", "is not about what you kwow..."," is about what you can figure out." , "is not just how it looks like & feels like...", "is how it works.", "is not for philosophy, it's for life."];

//cursor animation
let cursor = gsap.to('.cursor', {opacity:0, ease:"power2.inOut", repeat:-1})

//box
let boxTL = gsap.timeline()
//box underline
boxTL.to('.box',{duration: 1, width:"17vw", delay:"1", ease: "power4.inOut"})
//text appear
.from('.hi', {duration: 1, y:"7vw", ease: "power3.out", onComplete: () => masterTL.play()})
//box extend
.to('.box', {duration: 1, height:"7vw", ease:"elastic.out"})
//box flicker
// .to('.box', {duration: 2., autoAlpha:0, yoyo: true, repeat: -1})

// typewritting effect
let masterTL = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration:1, text: word})
    masterTL.add(tl)
})

// WOW ANIM(fadeInUp)
new WOW().init();
