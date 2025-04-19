// Funciones del sitio web con jQuery y Bootstrap
$(document).ready(function() {
    // Modo oscuro
    const darkModeToggle = $('#dark-mode-toggle');
    const body = $('body');
    
    // Verificar si hay preferencia guardada en localStorage
    const darkModeStored = localStorage.getItem('darkMode');
    
    // Si hay preferencia guardada, aplicarla
    if (darkModeStored === 'true') {
        darkModeToggle.prop('checked', true);
        body.addClass('dark-mode');
    } else if (darkModeStored === 'false') {
        darkModeToggle.prop('checked', false);
        body.removeClass('dark-mode');
    } else {
        // Si no hay preferencia guardada, usar la preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            darkModeToggle.prop('checked', true);
            body.addClass('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.setItem('darkMode', 'false');
        }
    }

    // Alternar modo oscuro
    darkModeToggle.on('change', function() {
        if ($(this).is(':checked')) {
            body.addClass('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            body.removeClass('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
    
    // Carrusel de testimonios - Bootstrap se encarga del carrusel básico
    // Aquí sólo agregamos funcionalidad adicional si es necesario
    
    // Contador animado con IntersectionObserver y jQuery
    function animateCounter() {
        $('.counter').each(function() {
            const $counter = $(this);
            const target = parseInt($counter.attr('data-target'));
            const duration = 2000; // 2 segundos para la animación
            
            $({ Counter: 0 }).animate({
                Counter: target
            }, {
                duration: duration,
                easing: 'swing',
                step: function() {
                    $counter.text(Math.ceil(this.Counter));
                },
                complete: function() {
                    $counter.text(target);
                }
            });
        });
    }
    
    // Usando IntersectionObserver para activar el contador cuando es visible
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        // Observar la sección de contadores
        const counterSection = document.querySelector('.counter-section');
        if (counterSection) {
            observer.observe(counterSection);
        }
    } else {
        // Fallback para navegadores que no soportan IntersectionObserver
        animateCounter();
    }
    
    // Mostrar elementos al hacer scroll (para el blog)
    function showCardsOnScroll() {
        $('.blog-card').each(function() {
            const cardTop = $(this).offset().top;
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            
            if (cardTop < scrollTop + windowHeight * 0.8) {
                $(this).addClass('visible');
            }
        });
    }
    
    $(window).on('scroll', showCardsOnScroll);
    showCardsOnScroll(); // Ejecutar al cargar la página
    
    // Validación de formulario de contacto con Bootstrap
    const contactForm = $('#contactForm');
    if (contactForm.length) {
        contactForm.on('submit', function(e) {
            e.preventDefault();
            
            // Usar la validación de Bootstrap
            if (!this.checkValidity()) {
                e.stopPropagation();
                $(this).addClass('was-validated');
                return;
            }
            
            const submitBtn = $(this).find('button[type="submit"]');
            const originalText = submitBtn.html();
            
            // Mostrar spinner
            submitBtn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...');
            submitBtn.prop('disabled', true);
            
            // Simular envío (en un caso real sería una petición AJAX)
            setTimeout(() => {
                // Ocultar spinner
                submitBtn.html(originalText);
                submitBtn.prop('disabled', false);
                
                // Mostrar modal de confirmación usando Bootstrap
                const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
                confirmationModal.show();
                
                // Resetear formulario
                contactForm[0].reset();
                contactForm.removeClass('was-validated');
            }, 1500);
        });
    }
    
    // Validación de Newsletter
    $('#newsletterForm').on('submit', function(e) {
        e.preventDefault();
        const $form = $(this);
        
        if (!this.checkValidity()) {
            e.stopPropagation();
            $form.addClass('was-validated');
            return;
        }
        
        const $button = $form.find('button[type="submit"]');
        const originalText = $button.html();
        $button.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...');
        $button.prop('disabled', true);
        
        setTimeout(() => {
            $button.html(originalText);
            $button.prop('disabled', false);
            
            // Mostrar toast con Bootstrap
            const toastEl = $('<div class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">' +
                '<div class="d-flex">' +
                '<div class="toast-body">¡Te has suscrito correctamente!</div>' +
                '<button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>' +
                '</div></div>');
            
            $('.toast-container').append(toastEl);
            const toast = new bootstrap.Toast(toastEl[0], { delay: 3000 });
            toast.show();
            
            $form[0].reset();
            $form.removeClass('was-validated');
        }, 1500);
    });
    
    // Header con scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
    
    // Inicializar tooltips de Bootstrap si existen
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    // Animación de barras de progreso en tarjetas de entrenadores
    $('.trainer-card').on('mouseenter', function() {
        const $progressBars = $(this).find('.progress-bar');
        
        $progressBars.each(function() {
            const width = $(this).attr('aria-valuenow') + '%';
            $(this).css('width', 0).animate({
                width: width
            }, 1000);
        });
    });
    
    // Reiniciar barras de progreso cuando se sale de la tarjeta
    $('.trainer-card').on('mouseleave', function() {
        const $progressBars = $(this).find('.progress-bar');
        $progressBars.css('width', 0);
    });
});