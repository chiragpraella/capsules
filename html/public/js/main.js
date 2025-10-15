document.addEventListener("DOMContentLoaded", function () {

  // SET INITIAL STATES IMMEDIATELY (before loader)
  // This prevents elements from being visible before animations start
  if (window.gsap) {
    // Hide elements that will animate after loader
    gsap.set(".top-to-bottom-reveal", {
      opacity: 0,
      visibility: "hidden"
    });

    // Hide button slide animation elements
    gsap.set(".text-slide-animation .slides-wrapper > div", {
      opacity: 0
    });

    // Any other elements you're animating - hide them here
  }

  // Loader animation code
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
    startLoadingOnce();
  }

  if (window.gsap) {
    gsap.set(capsuleWrapper, { transformOrigin: '50% 50%' });
  }

  progressBar.style.width = '0%';
  let progress = 0;

  function updateProgress(to) {
    const clamped = Math.max(0, Math.min(1, to));
    gsap.to(progressBar, {
      width: (clamped * 100) + '%',
      duration: 0.5,
      ease: "power1.out",
    });
  }

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

  function endAnimation() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const rect = capsuleWrapper.getBoundingClientRect();

    const scaleX = viewportWidth / rect.width;
    const scaleY = viewportHeight / rect.height;
    const overshoot = 1.04;
    const targetScale = Math.max(scaleX, scaleY) * overshoot;

    gsap.to(capsuleWrapper, {
      scale: targetScale,
      opacity: 0,
      duration: 1.25,
      ease: "power2.inOut",
    });

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
        document.dispatchEvent(new CustomEvent('loader:finished'));
      }
    });
  }

  window.finishCapsuleLoader = endAnimation;

  if (typeof window.gsap === "undefined") {
    loader.style.display = 'none';
    document.dispatchEvent(new CustomEvent('loader:finished'));
  }

  // Defer all remaining animations until loader completes
  function initAfterLoader() {
    // NOW reveal and animate elements
    const header = document.querySelector('header');
    const logo = header.querySelector('.logo');
    const firstSection = document.querySelector('.hero-section');

    let lastScrollY = window.scrollY;
    let ticking = false;
    let isHeaderVisible = true;

    gsap.set(logo, { opacity: 0, visibility: 'hidden' });

    const getFirstSectionBottom = () => {
      if (!firstSection) return window.innerHeight;
      return firstSection.offsetTop + firstSection.offsetHeight;
    };

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const firstSectionBottom = getFirstSectionBottom();
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      if (scrollDifference > 5) {
        if (scrollingDown && currentScrollY > 100 && isHeaderVisible) {
          isHeaderVisible = false;
          gsap.to(header, {
            yPercent: -100,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        } else if (scrollingUp && !isHeaderVisible) {
          isHeaderVisible = true;
          gsap.to(header, {
            yPercent: 0,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        }
      }

      if (currentScrollY <= 100 && !isHeaderVisible) {
        isHeaderVisible = true;
        gsap.to(header, {
          yPercent: 0,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      }

      if (currentScrollY > firstSectionBottom) {
        gsap.to(logo, {
          opacity: 1,
          visibility: 'visible',
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(logo, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            if (currentScrollY <= firstSectionBottom) {
              gsap.set(logo, { visibility: 'hidden' });
            }
          }
        });
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    updateHeader();

    const btn = document.getElementById('menu');
    const top = document.getElementById('menu-line-top');
    const mid = document.getElementById('menu-line-middle');
    const bot = document.getElementById('menu-line-bottom');
    let open = false;
    btn.addEventListener('click', function (e) {
      open = !open;
      if (open) {
        top.setAttribute('transform', 'matrix(0.70711,0.70711,-0.70711,0.70711,3.9289,-2.48532)');
        mid.style.opacity = '0';
        bot.setAttribute('transform', 'matrix(0.70711,-0.70711,0.70711,0.70711,-4.55642,6)');
      } else {
        top.setAttribute('transform', 'matrix(1,0,0,1,0,0)');
        mid.style.opacity = '1';
        bot.setAttribute('transform', 'matrix(1,0,0,1,0,0)');
      }
    });

    // Button text slide animation - NOW with visibility restored
    document.querySelectorAll('.text-slide-animation').forEach(button => {
      const wrapper = button.querySelector('.slides-wrapper');
      const originalText = wrapper.querySelector('div');
      const duplicateText = originalText.cloneNode(true);
      wrapper.appendChild(duplicateText);

      // Make visible now
      gsap.set([originalText, duplicateText], { opacity: 1 });
      gsap.set(originalText, { y: '0%' });
      gsap.set(duplicateText, { y: '100%' });

      let isOpen = false;

      if (button.id === 'menu') {
        button.addEventListener('click', () => {
          isOpen = !isOpen;
          originalText.textContent = isOpen ? 'Close' : 'Menu';
          duplicateText.textContent = isOpen ? 'Close' : 'Menu';
        });
      }

      button.addEventListener('mouseenter', () => {
        gsap.killTweensOf([originalText, duplicateText]);
        gsap.to(originalText, {
          y: '-100%',
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(duplicateText, {
          y: '0%',
          duration: 0.4,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.killTweensOf([originalText, duplicateText]);
        gsap.to(duplicateText, {
          y: '100%',
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(originalText, {
          y: '0%',
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    // Text reveal top to bottom animation - NOW visible and animated
    let split = SplitText.create(".top-to-bottom-reveal", {
      type: "lines",
      mask: "lines"
    });

    // Make visible first, then animate
    gsap.set(".top-to-bottom-reveal", {
      opacity: 1,
      visibility: "visible"
    });

    gsap.from(split.lines, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }

  document.addEventListener('loader:finished', initAfterLoader, { once: true });
});
