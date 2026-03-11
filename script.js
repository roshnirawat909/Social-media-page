// Example: Animate hero titles
gsap.from(".photo h1", {
  duration: 1.2,
  y: 60,
  opacity: 0,
  stagger: 0.25,
  ease: "power2.out"
});

// Example: Animate company icons/text
gsap.from(".company h1", {
  duration: 1,
  y: 40,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

// Example: Animate navigation bar

gsap.from(".nav .r", {
  duration: 1.1,
  x: "100%", 
  opacity: 0,
  ease: "power4.in"
});


gsap.from(".nav .l " , {
  duration: 1.1,
  x: "-100%",
  opacity: 0,
  ease: "power4.out"
});



// Animate the project section
gsap.from(".project", {
  duration: 1,
  scale: 0.9,
  opacity: 0,
  ease: "power2.out"
});
