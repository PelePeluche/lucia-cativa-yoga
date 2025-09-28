// Main script entry point - imports and initializes all modules
// import './navigation';
// import './newsletter';
// import './header';

// Global type declarations for external libraries
declare global {
  interface Window {
    AOS: any;
  }
  var AOS: any;
}

// Export to make this a module (fixes TypeScript global declaration error)
export {};

// Initialize AOS when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  if (typeof (window as any).AOS !== "undefined") {
    (window as any).AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // ✨ Permite animaciones repetidas
      mirror: true, // ✨ Anima también al scroll hacia arriba
      offset: 120,
      delay: 0,
    });
  }
});
