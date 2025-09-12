// Newsletter form functionality
import { LUCIA_TEAL, LUCIA_MAUVE, LUCIA_ROSE } from '../constants/colors';

export function initNewsletterForm(): void {
  const form = document.getElementById('newsletter-form') as HTMLFormElement;
  if (!form) return;

  form.addEventListener('submit', handleNewsletterSubmit);
}

function handleNewsletterSubmit(e: Event): void {
  e.preventDefault();
  
  const form = e.currentTarget as HTMLFormElement;
  const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
  const button = form.querySelector('button[type="submit"]') as HTMLButtonElement;
  
  if (!emailInput || !button) return;
  
  const email = emailInput.value;
  const originalText = button.textContent || '';
  
  // Simple email validation
  if (email && isValidEmail(email)) {
    showSuccess(button, originalText, form);
  } else {
    showError(button, originalText);
  }
}

function isValidEmail(email: string): boolean {
  return email.includes('@') && email.includes('.');
}

function showSuccess(button: HTMLButtonElement, originalText: string, form: HTMLFormElement): void {
  button.textContent = 'Suscrito ✓';
  button.style.backgroundColor = LUCIA_TEAL;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = LUCIA_MAUVE;
    form.reset();
  }, 2000);
}

function showError(button: HTMLButtonElement, originalText: string): void {
  button.textContent = 'Email inválido';
  button.style.backgroundColor = LUCIA_ROSE;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = LUCIA_MAUVE;
  }, 2000);
}

// Initialize newsletter form when DOM is loaded
document.addEventListener('DOMContentLoaded', initNewsletterForm, { once: true });
