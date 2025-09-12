// TypeScript definitions for UI components
export interface BaseComponentProps {
  class?: string;
  'data-aos'?: string;
  'data-aos-delay'?: string;
  'data-aos-offset'?: string;
}

// Button component types
export interface ButtonProps extends BaseComponentProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export interface CTAButtonProps extends BaseComponentProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  target?: '_blank' | '_self';
}

// Card component types
export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  padding?: string;
}

export interface BenefitCardProps extends BaseComponentProps {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialCardProps extends BaseComponentProps {
  name: string;
  text: string;
  image?: string;
}

// Common UI component types
export interface SectionTitleProps extends BaseComponentProps {
  title: string;
  alignment?: 'left' | 'center' | 'right';
  titleColor?: string;
  lineColor?: string;
}

export interface DecoratedImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  decorationColor?: string;
}

export interface TagListProps extends BaseComponentProps {
  tags: string[];
  tagColor?: string;
}

export interface SocialIconProps extends BaseComponentProps {
  platform: 'instagram' | 'youtube' | 'facebook' | 'twitter';
  url: string;
}

// Newsletter component types
export interface NewsletterFormProps extends BaseComponentProps {
  variant?: 'default' | 'compact';
}

// Layout component types
export interface LayoutProps {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'neutral';

// Animation types
export interface AOSConfig {
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  delay?: number;
  offset?: number;
  duration?: number;
}
