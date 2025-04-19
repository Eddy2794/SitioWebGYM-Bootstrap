/**
 * trainer-flip.js - Script para manejar el efecto flip de las tarjetas de entrenadores
 * Compatible con todos los navegadores modernos y dispositivos móviles
 */

(function() {
    'use strict';
    
    /**
     * Inicializa el efecto flip para las tarjetas de entrenadores
     */
    function initTrainerCards() {
        const trainerCards = document.querySelectorAll('.trainer-card');
        if (!trainerCards.length) return;
        
        // Detectar soporte para transformaciones 3D
        const supportsTransform3D = supportsFeature('transform-style', 'preserve-3d');
        
        // Detectar si es un dispositivo táctil
        const isTouchDevice = ('ontouchstart' in window) || 
                             (navigator.maxTouchPoints > 0) || 
                             (navigator.msMaxTouchPoints > 0);
        
        // Aplicar clases según características del dispositivo
        if (!supportsTransform3D) {
            document.body.classList.add('no-preserve-3d');
            addFallbackStyles();
        }
        
        if (isTouchDevice) {
            document.body.classList.add('touch-device');
        }
        
        // Aplicar soluciones específicas para Safari
        const isIOSSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        
        if (isIOSSafari || isSafari) {
            applySafariFixStyles();
        }
        
        // Inicializar cada tarjeta
        trainerCards.forEach(card => {
            initTrainerCard(card, isTouchDevice);
        });
        
        // Forzar repintado para evitar bugs visuales al cargar
        setTimeout(() => {
            forceRedraw(trainerCards);
        }, 100);
    }
    
    /**
     * Inicializa eventos para una tarjeta individual
     */
    function initTrainerCard(card, isTouchDevice) {
        // Manejar clic/toque para dispositivos táctiles
        card.addEventListener('click', function() {
            if (isTouchDevice) {
                this.classList.toggle('flipped');
            }
        });
        
        // Animación de barras de progreso
        card.addEventListener('mouseenter', function() {
            animateProgressBars(this, true);
        });
        
        card.addEventListener('mouseleave', function() {
            animateProgressBars(this, false);
        });
        
        // Si es un dispositivo táctil, también animar al voltear
        if (isTouchDevice) {
            card.addEventListener('click', function() {
                if (this.classList.contains('flipped')) {
                    animateProgressBars(this, true);
                } else {
                    animateProgressBars(this, false);
                }
            });
        }
    }
    
    /**
     * Anima las barras de progreso
     */
    function animateProgressBars(card, isEntering) {
        const progressBars = card.querySelectorAll('.progress-bar');
        
        if (isEntering) {
            progressBars.forEach(bar => {
                const width = bar.getAttribute('aria-valuenow') + '%';
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                    bar.style.transition = 'width 1s ease';
                }, 50);
            });
        } else {
            progressBars.forEach(bar => {
                bar.style.width = '0%';
            });
        }
    }
    
    /**
     * Verifica si el navegador soporta una característica CSS específica
     */
    function supportsFeature(property, value) {
        const element = document.createElement('div');
        element.style[property] = value;
        return element.style[property] === value;
    }
    
    /**
     * Agrega estilos alternativos cuando el navegador no soporta preserve-3d
     */
    function addFallbackStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .no-preserve-3d .trainer-front, 
            .no-preserve-3d .trainer-back {
                transition: opacity 0.6s ease;
            }
            .no-preserve-3d .trainer-back {
                transform: none;
                opacity: 0;
            }
            .no-preserve-3d .trainer-card:hover .trainer-front {
                opacity: 0;
            }
            .no-preserve-3d .trainer-card:hover .trainer-back {
                opacity: 1;
            }
            .no-preserve-3d .trainer-card.flipped .trainer-front {
                opacity: 0;
            }
            .no-preserve-3d .trainer-card.flipped .trainer-back {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Aplica estilos específicos para Safari y iOS
     */
    function applySafariFixStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .trainer-card {
                -webkit-transform: translate3d(0,0,0);
                transform: translate3d(0,0,0);
            }
            .trainer-inner {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                will-change: transform;
            }
            .trainer-front, .trainer-back {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                will-change: transform;
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Fuerza un repintado de los elementos para evitar bugs visuales
     */
    function forceRedraw(elements) {
        elements.forEach(element => {
            element.style.transform = 'translateZ(0)';
            setTimeout(() => {
                element.style.transform = '';
            }, 0);
        });
    }
    
    // Inicializar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', initTrainerCards);
})(); 