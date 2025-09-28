// Header functionality - Language dropdown and Mobile menu
document.addEventListener('DOMContentLoaded', function() {
  // Language dropdown functionality
  const languageToggle = document.getElementById('language-toggle');
  const languageMenu = document.getElementById('language-menu');

  if (languageToggle && languageMenu) {
    languageToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isVisible = languageMenu.style.visibility === 'visible';
      
      if (isVisible) {
        languageMenu.style.visibility = 'hidden';
        languageMenu.style.opacity = '0';
      } else {
        languageMenu.style.visibility = 'visible';
        languageMenu.style.opacity = '1';
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function(event) {
      if (event.target && !languageToggle.contains(event.target as Node)) {
        languageMenu.style.visibility = 'hidden';
        languageMenu.style.opacity = '0';
      }
    });
  }

  // Mobile menu functionality
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function openMobileMenu() {
    if (mobileMenu && mobileOverlay) {
      mobileMenu.style.transform = 'translateX(0)';
      mobileOverlay.style.visibility = 'visible';
      mobileOverlay.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileOverlay) {
      mobileMenu.style.transform = 'translateX(100%)';
      mobileOverlay.style.visibility = 'hidden';
      mobileOverlay.style.opacity = '0';
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});
