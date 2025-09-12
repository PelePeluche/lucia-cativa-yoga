// AOS (Animate On Scroll) initialization script with lazy loading
export function initAOS(): void {
  // Check if AOS is available
  if (typeof AOS === 'undefined') {
    console.warn('AOS library not loaded');
    return;
  }

  // Use Intersection Observer for better performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Initialize AOS only when elements come into view
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true, // Changed to true for better performance
          mirror: false, // Disabled for performance
          offset: 120,
          delay: 100,
          disable: 'mobile' // Disable on mobile for better performance
        });
        observer.disconnect(); // Stop observing after initialization
      }
    });
  });

  // Observe the first AOS element
  const firstAOSElement = document.querySelector('[data-aos]');
  if (firstAOSElement) {
    observer.observe(firstAOSElement);
  } else {
    // Fallback: init immediately if no AOS elements found
    initAOSImmediate();
  }
}

function initAOSImmediate(): void {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 120,
      delay: 100,
      disable: 'mobile'
    });
  }
}

// Initialize AOS when DOM is loaded
document.addEventListener('DOMContentLoaded', initAOS, { once: true });
