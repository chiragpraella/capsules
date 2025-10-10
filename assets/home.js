gsap.registerPlugin(ScrollTrigger);

// second section animation
// Initialize animations
function initAnimations() {
  // Images start from bottom and parallax up at different speeds
  const images = gsap.utils.toArray('.image-container');
  const speeds = [1, 2, 1.5, 1]; // Different speeds for each image

  // 1️⃣ Pin the text once
  ScrollTrigger.create({
    trigger: '.parallax-images',
    start: 'top top',
    end: '+=3800',
    pin: '.text-sticky',
    // markers: true,
    scrub: 1,
  onUpdate: function(self) {
    // When scrolling forward, fade out at the end; when reversing, fade in
    if (self.progress === 1) {
      gsap.to('.text-sticky', { opacity: 0, duration: 0.3, overwrite: 'auto' });
    } else {
      gsap.to('.text-sticky', { opacity: 1, duration: 0.3, overwrite: 'auto' });
    }
  },
  });

  // 2️⃣ Animate images without pinning again
  images.forEach((img, i) => {
    const speed = speeds[i];

    // Initial position
    gsap.fromTo(img, 
    { y: window.innerHeight + 200, opacity: 1, scale: 1 },
    { y: -window.innerHeight * speed, ease: "none",
      scrollTrigger: {
        trigger: '.parallax-images',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true
      }
    });
  });

}
// Start animations when page loads
window.addEventListener('load', initAnimations);

// Refresh ScrollTrigger on window resize




document.addEventListener("DOMContentLoaded", () => {

});



let resizeTimeout;
window.addEventListener("resize,load", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 200);
});