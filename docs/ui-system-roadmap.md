# Portfolio UI System Roadmap

## Objetivo

Transformar el portfolio desde una colección de componentes visuales hacia un sistema UI consistente, mantenible y preparado para light/dark mode.

---

# Fase 1 - Auditoría y Limpieza

## Completado

- [x] Auditoría completa de estilos
- [x] Auditoría de Tailwind
- [x] Auditoría de dark mode
- [x] Auditoría de componentes críticos
- [x] Auditoría de colores hardcodeados
- [x] Auditoría de arquitectura visual

### Limpieza

- [x] Eliminado App.css heredado de Vite
- [x] Identificados colores hardcodeados
- [x] Identificados usos incorrectos de tokens
- [x] Identificados componentes problemáticos
- [x] Identificados archivos con utility soup

### Dark Mode

- [x] Completados tokens faltantes en .dark
- [x] Normalizado sistema base dark

---

# Fase 2 - Normalización Semántica

## En progreso

### Tokens

- [x] Crear token success
- [x] Crear token success-foreground

- [x] Crear token warning
- [x] Crear token warning-foreground

- [x] Crear token surface
- [x] Crear token surface-foreground

- [x] Crear token brand
- [x] Crear token brand-foreground

### Tailwind

- [ ] Conectar nuevos tokens al tailwind.config.ts

### Reemplazos

- [ ] Eliminar text-green-500
- [ ] Eliminar text-red-500

- [ ] Eliminar text-white en componentes propios
- [ ] Eliminar bg-white/* en componentes propios
- [ ] Eliminar border-white/* en componentes propios

- [x] Revisar usos de text-secondary
- [x] Corregir contraste en Hero
- [x] Corregir contraste en Contact

---

# Fase 3 - Sistema de Componentes

## Pendiente

### Primitives
- [x] Optimizar espaciados de About
- [x] Reducir altura visual de About
- [x] Mejorar aprovechamiento de viewport
- [x] Mejorar lectura en notebooks
 

 

- [ ] Section
- [ ] SectionHeader
- [ ] SurfaceCard
- [ ] TechBadge

### Refactor

- [ ] Hero
- [ ] Projects
- [ ] Contact

---

# Fase 4 - Theme System

## Pendiente

- [ ] Implementar ThemeProvider
- [ ] Implementar ThemeToggle
- [ ] Light Mode real
- [ ] Test de contraste

---

# Fase 5 - Calidad Profesional

## Pendiente

- [ ] Revisar accesibilidad
- [ ] Revisar responsive
- [ ] Revisar performance
- [ ] Revisar bundle
- [ ] Revisar Lighthouse

---

# Notas

## Problemas detectados

- text-secondary usado como color de texto principal
- text-green-500 y text-red-500 fuera del sistema semántico
- white/black hardcodeados
- Hero muy acoplado visualmente
- Projects concentra demasiadas responsabilidades

## Próximo paso

Crear tokens:
- success
- warning
- surface
- brand

y conectarlos a Tailwind.