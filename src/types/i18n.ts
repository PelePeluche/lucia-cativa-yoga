// TypeScript definitions for i18n system
export interface Translation {
  nav: {
    aboutMe: string;
    onlineYoga: string;
    inPersonYoga: string;
    retreats: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    greeting: string;
    welcome: string;
    cta1: string;
    cta2: string;
  };
  aboutMe: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
  };
  myClasses: {
    title: string;
    subtitle: string;
    description: string;
    onlineClasses: {
      title: string;
      description: string;
      introClasses: string;
      benefits: {
        title: string;
        benefit1: string;
        benefit2: string;
        benefit3: string;
        benefit4: string;
        benefit5: string;
      };
      details: string;
      cta: string;
    };
    inPersonClasses: {
      title: string;
      description: string;
      details: string;
      contact: string;
      cta: string;
    };
  };
  footer: {
    copyright: string;
    address: string;
    emailLabel: string;
    phone: string;
    followMe: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
    newsletter: string;
    subscribeButton: string;
    emailPlaceholder: string;
  };
}

// Supported languages
export type SupportedLanguage = 'es' | 'en';

// Language configuration
export interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  flag: string;
}

// i18n hook return type
export interface UseI18nReturn {
  currentLang: SupportedLanguage;
  t: (key: string) => string;
  pathname: string;
}

// Translation function type
export type TranslationFunction = (key: string) => string;

// Utility types for nested keys
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<Translation>;
