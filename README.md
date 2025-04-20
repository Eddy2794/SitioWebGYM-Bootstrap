# PowerGym - Sitio Web con Bootstrap

Este proyecto es la implementación de un sitio web completo para un gimnasio utilizando Bootstrap 5, jQuery y tecnologías modernas de desarrollo web. El sitio está optimizado para dispositivos móviles y ofrece una experiencia de usuario mejorada con efectos y animaciones.

## Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5.3.2
- jQuery 3.7.1
- Font Awesome 6.0.0
- Google Fonts

## Características principales

- Diseño responsive y moderno para todos los dispositivos
- Modo oscuro/claro con cambio automático basado en preferencias del sistema
- Navegación con mega menú desplegable
- Animaciones y transiciones para mejorar la experiencia de usuario
- Efecto flip 3D para tarjetas de entrenadores (compatible con todos los navegadores)
- Carrusel de testimonios
- Contador animado
- Validación de formularios
- Notificaciones Toast
- Modales para confirmaciones
- Optimización para dispositivos táctiles

## Estructura del proyecto

```
/
├── index.html               # Página principal
├── clases.html              # Catálogo de clases disponibles
├── entrenadores.html        # Página de entrenadores con efecto flip 3D
├── precios.html             # Planes y precios con toggle anual/mensual
├── blog.html                # Blog con artículos y filtrado por categorías
├── contacto.html            # Formulario de contacto con validación
├── css/
│   ├── animations.css       # Animaciones y efectos visuales
│   ├── styles-bootstrap.css # Estilos principales basados en Bootstrap
│   └── dark-mode.css        # Estilos específicos para el modo oscuro
├── js/
│   ├── main.js              # Funcionalidad principal y modo oscuro
│   └── trainer-flip.js      # Script para el efecto flip de tarjetas de entrenadores
├── images/                  # Imágenes del sitio
├── videos/                  # Archivos de video para hero sections
└── assets/                  # Otros recursos como documentos y archivos
```

## Páginas del sitio

### index.html
- **Hero section** con video de fondo y animaciones
- **Clases destacadas** con tarjetas interactivas
- **Contador** animado de estadísticas
- **Testimonios** en carrusel interactivo
- **Footer** con mapa integrado y formulario de newsletter

### clases.html
- **Filtros** para categorías de clases con comportamiento responsivo
- **Grid masonry** para mostrar clases de diferentes tamaños
- **Tabla de horarios** semanal
- **Sección de FAQs** con acordeón Bootstrap

### entrenadores.html
- **Tarjetas de entrenadores** con efecto flip 3D
- **Soporte para dispositivos táctiles** con indicador visual
- **Barras de progreso animadas** para mostrar habilidades
- **Optimización** para todos los navegadores y dispositivos

### precios.html
- **Toggle** entre precios mensuales y anuales
- **Tarjetas de planes** con destacado para el plan más popular
- **Indicadores de ahorro** para planes anuales
- **Sección de beneficios adicionales** con tooltips informativos

### blog.html
- **Sistema de filtrado** por categorías
- **Grid** de artículos con distintos formatos
- **Artículo destacado** con diseño especial
- **Sección de comentarios** con animaciones
- **Formulario de suscripción** para newsletter

### contacto.html
- **Formulario de contacto** con validación en tiempo real
- **Información de contacto** con iconografía
- **Modal de confirmación** al enviar el formulario
- **Diseño responsivo** adaptado a todos los dispositivos

## Implementación de Bootstrap

El sitio ha sido implementado siguiendo las mejores prácticas de Bootstrap 5, manteniendo una estética coherente y personalizada:

### Componentes Bootstrap utilizados

- **Navbar** para la navegación principal con megamenú
- **Dropdown** personalizado para crear el mega menú
- **Carrusel** para los testimonios y hero sections
- **Tarjetas (Cards)** para mostrar clases, entrenadores, precios y artículos
- **Sistema de grid** para layouts responsivos
- **Formularios** con validación integrada
- **Modales** para confirmaciones y alertas
- **Toasts** para notificaciones temporales
- **Tooltips** e iconos para mejorar la experiencia
- **Acordeón** para secciones de FAQs

## Modo oscuro

La implementación del modo oscuro utiliza una combinación de clases CSS y JavaScript para alternar entre temas claros y oscuros, respetando las preferencias del usuario configuradas en su sistema. El cambio se realiza sin recargar la página, aplicando clases CSS con transiciones suaves.

## Efecto Flip de Tarjetas

Las tarjetas de entrenadores utilizan un efecto flip 3D avanzado implementado con CSS y JavaScript:

- **Compatibilidad** con todos los navegadores modernos
- **Fallback** para navegadores que no soportan transformaciones 3D
- **Soporte para dispositivos táctiles** con indicador visual y detección automática
- **Animaciones** en las barras de progreso al voltear la tarjeta
- **Optimizaciones** específicas para Safari e iOS

## Optimización para rendimiento

- Uso de imágenes WebP
- Carga diferida de recursos no críticos
- Minimización de peticiones HTTP
- Animaciones optimizadas con GPU acceleration
- Soporte para dispositivos de alta densidad de píxeles

## Autor

Edgardo Mamamni - 2025 