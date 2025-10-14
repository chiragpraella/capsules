document.addEventListener("DOMContentLoaded", function () {
    const loaderText = document.getElementById('loader-text');
    const loader = document.getElementById('capsule-loader');
    const progressBar = document.getElementById('capsule-progress-bar');
    const capsuleWrapper = document.getElementById('capsule-wrapper');

    let loadingStarted = false;
    const startLoadingOnce = () => {
      if (loadingStarted) return;
      loadingStarted = true;
      simulateLoading();
    };

    if (window.gsap && window.SplitText) {
      // Split text into letters, wrap in span
      const split = new SplitText('.right-reveal-text', {
        autoSplit: true,
        mask: "chars",
        onSplit: (self) => {
          gsap.from(self.chars, {
            duration: 1,
            delay: 0.1,
            xPercent: 150,
            opacity: 0,
            stagger: 0,
            ease: "expo.out",
            onComplete: startLoadingOnce
          });
        }
      });
    } else {
      // Fallback: start loading immediately if text effect unavailable
      startLoadingOnce();
    }

    // Ensure scaling is from the exact center
    if (window.gsap) {
      gsap.set(capsuleWrapper, { transformOrigin: '50% 50%' });
    }

    // Initial state
    progressBar.style.width = '0%';

    // Animate progress using GSAP
    let progress = 0;

    function updateProgress(to) {
      // Clamp to 0..1 and animate using percentage width so it fits inside borders
      const clamped = Math.max(0, Math.min(1, to));
      gsap.to(progressBar, {
        width: (clamped * 100) + '%',
        duration: 0.5,
        ease: "power1.out",
      });
    }

    // Simulate loading
    function simulateLoading() {
      let interval = setInterval(() => {
        if (progress < 1) {
          progress += 0.02 + Math.random() * 0.07;
          if (progress > 1) progress = 1;
          updateProgress(progress);
        }
        if (progress >= 1) {
          clearInterval(interval);
          endAnimation();
        }
      }, 42);
    }

    // Grow the capsule from center to fill the viewport, then fade out
    function endAnimation() {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      // Get capsule bounding rect
      const rect = capsuleWrapper.getBoundingClientRect();

      // Calculate scale factor to cover viewport while staying centered
      const scaleX = viewportWidth / rect.width;
      const scaleY = viewportHeight / rect.height;
      // Small overshoot to avoid subpixel gaps
      const overshoot = 1.04;
      const targetScale = Math.max(scaleX, scaleY) * overshoot;

      gsap.to(capsuleWrapper, {
        scale: targetScale,
        opacity: 0,
        duration: 1.25,
        ease: "power2.inOut",
      });

      // Separate animation for the loader background - ensure it's removed
      gsap.to(loader, {
        opacity: 0,
        duration: 1.25,
        ease: "power2.inOut",
        pointerEvents: 'none',
        delay: 0,
        onComplete: () => {
          loader.style.visibility = 'hidden';
          loader.style.display = 'none';
          loader.style.pointerEvents = 'none';
        }
      });
    }

    window.finishCapsuleLoader = endAnimation;

    if (typeof window.gsap === "undefined") {
      loader.style.display = 'none';
    }
  });