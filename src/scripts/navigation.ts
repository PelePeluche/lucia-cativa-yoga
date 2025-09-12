// Smooth scroll navigation functionality
export function initSmoothScroll(): void {
  const anchors = document.querySelectorAll('a[href^="#"]');
  
  anchors.forEach(anchor => {
    anchor.addEventListener('click', handleSmoothScroll, { passive: false });
  });
}

function handleSmoothScroll(e: Event): void {
  e.preventDefault();
  
  const anchor = e.currentTarget as HTMLAnchorElement;
  const href = anchor.getAttribute('href');
  
  if (!href) return;
  
  const target = document.querySelector(href);
  if (target) {
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Initialize smooth scroll when DOM is loaded
document.addEventListener('DOMContentLoaded', initSmoothScroll, { once: true });
