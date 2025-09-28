// Header functionality - Mobile menu and Language switcher
console.log('🚀 Header script file loaded!'); // Debug

document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 DOM loaded, initializing header...'); // Debug

  try {
    // Mobile menu elements
    console.log('🔍 Looking for mobile menu elements...'); // Debug
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');

    console.log('📋 Mobile elements found:', { 
      toggle: !!mobileMenuToggle, 
      close: !!mobileMenuClose, 
      menu: !!mobileMenu, 
      overlay: !!mobileOverlay 
    }); // Debug

  // Mobile menu functions
  function openMobileMenu() {
    console.log('Opening mobile menu'); // Debug
    if (mobileMenu && mobileOverlay) {
      mobileMenu.classList.add('open');
      mobileOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    console.log('Closing mobile menu'); // Debug
    if (mobileMenu && mobileOverlay) {
      mobileMenu.classList.remove('open');
      mobileOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  // Mobile menu event listeners
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
    console.log('Mobile menu toggle listener added'); // Debug
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    console.log('Mobile menu close listener added'); // Debug
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
    console.log('Mobile overlay listener added'); // Debug
  }

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  const languageToggle = document.getElementById('language-toggle');
  const languageMenu = document.getElementById('language-menu');

  console.log('Language elements:', { languageToggle, languageMenu }); // Debug

  // Language switcher functionality - SIMPLIFIED
  if (languageToggle && languageMenu) {
    console.log('✅ Language elements found, setting up...'); // Debug
    
    languageToggle.addEventListener('click', function(e) {
      console.log('🔽 Language button clicked!'); // Debug
      e.preventDefault();
      e.stopPropagation();
      
      const isVisible = languageMenu.style.visibility === 'visible';
      console.log('📋 Menu currently visible:', isVisible); // Debug
      
      if (isVisible) {
        languageMenu.style.setProperty('visibility', 'hidden', 'important');
        languageMenu.style.setProperty('opacity', '0', 'important');
        console.log('🙈 Hiding menu'); // Debug
      } else {
        languageMenu.style.setProperty('visibility', 'visible', 'important');
        languageMenu.style.setProperty('opacity', '1', 'important');
        // Temporary extreme visibility styles for debug
        languageMenu.style.setProperty('background-color', 'red', 'important');
        languageMenu.style.setProperty('border', '3px solid black', 'important');
        languageMenu.style.setProperty('z-index', '99999', 'important');
        languageMenu.style.setProperty('font-size', '16px', 'important');
        languageMenu.style.setProperty('color', 'white', 'important');
        languageMenu.style.setProperty('padding', '10px', 'important');
        
        console.log('👁️ Showing menu with debug styles'); // Debug
        console.log('📐 Menu element after show:', languageMenu); // Debug
        console.log('📏 Menu position after show:', languageMenu.getBoundingClientRect()); // Debug
        console.log('🎨 Menu computed styles:', window.getComputedStyle(languageMenu)); // Debug
        console.log('👀 Menu display style:', languageMenu.style.display); // Debug
        console.log('🔍 Menu parent element:', languageMenu.parentElement); // Debug
      }
    });

    // Close language menu when clicking outside
    document.addEventListener('click', function(event) {
      if (event.target && !languageToggle.contains(event.target)) {
        if (languageMenu.style.visibility === 'visible') {
          console.log('🚪 Closing menu from outside click'); // Debug
          languageMenu.style.setProperty('visibility', 'hidden', 'important');
          languageMenu.style.setProperty('opacity', '0', 'important');
        }
      }
    });

    console.log('Language switcher setup complete'); // Debug
  } else {
    console.error('Language elements not found!'); // Debug
  }

  console.log('Header script setup complete!'); // Debug
  
  } catch (error) {
    console.error('❌ Error in header script:', error);
  }
});
