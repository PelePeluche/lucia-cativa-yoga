// Animation system for consistent motion design
export const ANIMATIONS = {
  // Transition durations
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  },
  
  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },

  // Common transition classes
  transition: {
    all: 'transition-all duration-300 ease-in-out',
    colors: 'transition-colors duration-300 ease-in-out',
    transform: 'transition-transform duration-300 ease-in-out',
    opacity: 'transition-opacity duration-300 ease-in-out'
  }
} as const;

// AOS animation presets
export const AOS_PRESETS = {
  fadeUp: {
    'data-aos': 'fade-up',
    'data-aos-delay': '100',
    'data-aos-offset': '200'
  },
  fadeLeft: {
    'data-aos': 'fade-left',
    'data-aos-delay': '200',
    'data-aos-offset': '300'
  },
  fadeRight: {
    'data-aos': 'fade-right',
    'data-aos-delay': '200',
    'data-aos-offset': '300'
  },
  zoomIn: {
    'data-aos': 'zoom-in',
    'data-aos-delay': '150',
    'data-aos-offset': '250'
  }
} as const;

// Hover animations
export const HOVER_ANIMATIONS = {
  scale: 'hover:scale-105',
  lift: 'hover:-translate-y-1',
  glow: 'hover:shadow-lg',
  rotate: 'hover:rotate-1'
} as const;

export type AnimationPreset = keyof typeof AOS_PRESETS;
