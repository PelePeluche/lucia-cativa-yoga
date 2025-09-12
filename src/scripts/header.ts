// Header navigation functionality
let scrollTimeout: number | null = null;

export function initHeader(): void {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  // Throttled scroll handler for better performance
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    
    scrollTimeout = window.requestAnimationFrame(() => {
      handleScroll(nav);
      scrollTimeout = null;
    });
  }, { passive: true });

  // Language menu functionality
  initLanguageMenu();
}

function handleScroll(nav: HTMLElement): void {
  if (window.scrollY > 10) {
    nav.classList.add('nav-shadow');
  } else {
    nav.classList.remove('nav-shadow');
  }
}

function initLanguageMenu(): void {
  const languageToggle = document.getElementById('language-toggle');
  const languageMenu = document.getElementById('language-menu');

  if (!languageToggle || !languageMenu) return;

  // Toggle menu when clicking the button
  languageToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    languageMenu.classList.toggle('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as Element;
    if (!languageToggle.contains(target) && !languageMenu.contains(target)) {
      languageMenu.classList.remove('show');
    }
  });

  // Prevent closing when clicking inside the menu
  languageMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', initHeader, { once: true });
