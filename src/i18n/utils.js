// Utility functions for i18n support

import es from './es.json';
import en from './en.json';

export const LANGUAGES = {
  es: 'Español',
  en: 'English',
};

export const DEFAULT_LANGUAGE = 'es';

// Dictionary with all translations
export const TRANSLATIONS = { es, en };

// Get the preferred language from the URL
export function getLanguageFromURL(pathname) {
  const langCodeMatch = pathname.match(/\/([a-z]{2})(\/|$)/);
  return langCodeMatch ? langCodeMatch[1] : DEFAULT_LANGUAGE;
}

// Function to get translations for a specific language
export function useTranslations(lang) {
  return function t(key) {
    // Split the key by dots to navigate the translations object
    const keys = key.split('.');
    let value = TRANSLATIONS[lang];
    
    for (const k of keys) {
      if (value && Object.prototype.hasOwnProperty.call(value, k)) {
        value = value[k];
      } else {
        console.warn(`Missing translation: ${key} for language: ${lang}`);
        return key;
      }
    }
    
    return value;
  };
}

// Create paths with language prefix
export function localizedUrl(lang, path = '') {
  return lang === DEFAULT_LANGUAGE ? path : `/${lang}${path}`;
}
