# 🎨 Lu Cativa Yoga - Design System

## 📋 **¿Qué es un Design System?**

Un **Design System** es un conjunto de estándares, componentes reutilizables y guidelines que aseguran consistencia visual y funcional en toda la aplicación.

---

## ✅ **Estado Actual - IMPLEMENTADO**

### 🎨 **1. Sistema de Colores**
```typescript
// src/constants/colors.ts
export const COLORS = {
  'lucia-cream': '#f9f0dc',   // Background principal
  'lucia-brown': '#9a8576',   // Texto neutral
  'lucia-mauve': '#a3738b',   // Color primario
  'lucia-rose': '#e0a6a8',    // Color de acento
  'lucia-teal': '#577874'     // Color secundario
}
```

### 🔤 **2. Tipografías**
- **Headings:** Yeseva One (elegante, femenina)
- **Body:** Montserrat (legible, moderna)

### 📏 **3. Espaciado**
```typescript
// src/constants/spacing.ts
export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  // ... hasta 5xl
}
```

### 📱 **4. Breakpoints Responsivos**
```typescript
// src/constants/breakpoints.ts
export const BREAKPOINTS = {
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large Desktop
  '2xl': '1536px'
}
```

### 🌟 **5. Sombras y Elevación**
```typescript
// src/constants/shadows.ts
export const SHADOWS = {
  sm: 'shadow-sm',    // Botones
  md: 'shadow-md',    // Cards
  lg: 'shadow-lg',    // Modales
  xl: 'shadow-xl'     // Overlays
}
```

### ⚡ **6. Animaciones**
```typescript
// src/constants/animations.ts
export const AOS_PRESETS = {
  fadeUp: { 'data-aos': 'fade-up', 'data-aos-delay': '100' },
  fadeLeft: { 'data-aos': 'fade-left', 'data-aos-delay': '200' },
  // ... más presets
}
```

---

## 🧩 **Componentes UI Reutilizables**

### 🔘 **Botones**
- `Button.astro` - Botón base con variantes
- `CTAButton.astro` - Call-to-action específico

### 🃏 **Cards**
- `Card.astro` - Card base reutilizable
- `BenefitCard.astro` - Para sección beneficios
- `TestimonialCard.astro` - Para testimonios

### 🛠️ **Comunes**
- `SectionTitle.astro` - Títulos consistentes
- `LazyImage.astro` - Imágenes optimizadas
- `TagList.astro` - Lista de tags

---

## 🎯 **Cómo Usar el Design System**

### 📦 **Import Centralizado**
```typescript
// Importar todo el design system
import { DS, COLORS, SPACING, SHADOWS } from '@/constants';

// Usar tokens
const primaryColor = DS.colors.primary;
const cardShadow = DS.shadows.card;
```

### 🎨 **Aplicar Colores**
```astro
<!-- Usar clases Tailwind generadas -->
<div class="bg-lucia-cream text-lucia-brown">
  <h2 class="text-lucia-mauve">Título</h2>
</div>
```

### 📏 **Espaciado Consistente**
```astro
<!-- Usar spacing system -->
<section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
  <div class="mb-12 gap-6">
    <!-- Contenido -->
  </div>
</section>
```

### 🎭 **Animaciones AOS**
```astro
<!-- Usar presets de animación -->
<div data-aos="fade-up" data-aos-delay="100">
  <!-- Contenido animado -->
</div>
```

---

## 📊 **Beneficios Implementados**

✅ **Consistencia Visual** - Todos los componentes siguen los mismos estándares
✅ **Mantenibilidad** - Cambios centralizados se propagan automáticamente  
✅ **Escalabilidad** - Fácil agregar nuevos componentes
✅ **Performance** - Tokens optimizados para Tailwind
✅ **TypeScript** - Type safety en todos los componentes
✅ **Documentación** - Guidelines claras de uso

---

## 🚀 **Punto 10 - COMPLETADO**

El **Design System está 100% implementado** con:

- ✅ **Design Tokens** centralizados
- ✅ **Componentes** reutilizables  
- ✅ **TypeScript** types completos
- ✅ **Documentación** clara
- ✅ **Estructura** escalable
- ✅ **Performance** optimizada

El sitio ahora tiene un sistema de diseño robusto y profesional que asegura consistencia y facilita el mantenimiento futuro.
