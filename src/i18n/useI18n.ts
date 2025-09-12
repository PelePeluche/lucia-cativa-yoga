import { getLanguageFromURL, useTranslations, DEFAULT_LANGUAGE } from './utils';
import type { UseI18nReturn, SupportedLanguage } from '../types/i18n';

/**
 * Hook/composable para manejar i18n de forma centralizada
 * Elimina la duplicación de código en todos los componentes
 * Centralized i18n hook to eliminate code duplication
 */
export function useI18n(request: Request): UseI18nReturn {
  const pathname = new URL(request.url).pathname;
  const currentLang = (getLanguageFromURL(pathname) || DEFAULT_LANGUAGE) as SupportedLanguage;
  const t = useTranslations(currentLang);
  
  return {
    currentLang,
    t,
    pathname
  };
}
