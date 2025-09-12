// Language utilities for i18n
import es from './es.json';
import en from './en.json';
import type { SupportedLanguage, Translation, TranslationFunction, LanguageConfig } from '../types/i18n';

export const DEFAULT_LANGUAGE: SupportedLanguage = 'es';

export const LANGUAGES: Record<SupportedLanguage, string> = {
  es: 'Español',
  en: 'English'
};

export const LANGUAGE_CONFIGS: Record<SupportedLanguage, LanguageConfig> = {
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  }
};

export function getLanguageFromURL(pathname: string): SupportedLanguage | null {
  const langMatch = pathname.match(/^\/([a-z]{2})\//);
  const lang = langMatch ? langMatch[1] : null;
  
  // Validate that the language is supported
  if (lang && Object.keys(LANGUAGES).includes(lang)) {
    return lang as SupportedLanguage;
  }
  
  return null;
}

export function useTranslations(lang: SupportedLanguage): TranslationFunction {
  const translations: Record<SupportedLanguage, Translation> = { es, en };
  
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function localizedUrl(url: string, lang: SupportedLanguage): string {
  if (lang === DEFAULT_LANGUAGE) {
    return url;
  }
  return `/${lang}${url}`;
}

export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return Object.keys(LANGUAGES).includes(lang);
}
