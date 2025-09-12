// Main script entry point - imports and initializes all modules
import './navigation';
import './newsletter';
import './header';

// Initialize AOS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,        // ✨ Permite animaciones repetidas
      mirror: true,       // ✨ Anima también al scroll hacia arriba
      offset: 120,
      delay: 0,
    });
  }
});

// Global type declarations for external libraries
declare global {
  interface Window {
    AOS: any;
  }
  const AOS: any;
}
