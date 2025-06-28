function smoothScrollTo(element, duration = 600) {
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + start;
    const distance = end - start;
    const startTime = performance.now();
  
    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress; // easeInOut
  
      window.scrollTo(0, start + distance * ease);
  
      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }
  
    requestAnimationFrame(scrollStep);

    buttons.forEach(button => {
      button.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent accidental side effects
  
        const targetId = button.getAttribute("data-target");
        const target = document.getElementById(targetId);
        if (target && carousel) {
          const offsetLeft = target.offsetLeft - (carousel.offsetWidth / 2) + (target.offsetWidth / 2);
          carousel.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
          });
        }
      });
    });

    window.addEventListener('load', () => {
  const video = document.querySelector('video');
  if (video) {
    video.play().catch((e) => {
      console.log('Autoplay failed:', e);
    });
  }
});

// Horizontal scroll with vertical wheel input
const horizontalScrollContainer = document.querySelector('.carousel');

function handleHorizontalScroll(e) {
  // Only intercept vertical scroll
  if (e.deltaY !== 0) {
    e.preventDefault();
    horizontalScrollContainer.scrollLeft += e.deltaY;
  }
}

// Force Chrome to treat the listener as non-passive
horizontalScrollContainer.addEventListener("wheel", handleHorizontalScroll, { passive: false });


  }

  
  
  
  
  