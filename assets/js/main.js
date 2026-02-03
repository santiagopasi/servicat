/* ========================================
   SERVICAT - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollTop = document.getElementById('scroll-top');
    const filterBtns = document.querySelectorAll('.filter__btn');
    const projectCards = document.querySelectorAll('.project__card');
    const statNumbers = document.querySelectorAll('.stat__number');
    const contactForm = document.getElementById('contact-form');
    const searchInput = document.getElementById('project-search');
    const searchClear = document.getElementById('search-clear');

    /* ========================================
       MOBILE NAVIGATION
       ======================================== */
    // Open menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

    /* ========================================
       HEADER SCROLL EFFECT
       ======================================== */
    // Check if we're on a project page (needs header always visible)
    const isProjectPage = document.querySelector('.proyecto-hero') !== null;

    function handleScroll() {
        if (window.scrollY > 100 || isProjectPage) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show/hide scroll to top button
        if (window.scrollY > 500) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    }

    window.addEventListener('scroll', handleScroll);

    /* ========================================
       ACTIVE NAV LINK ON SCROLL
       ======================================== */
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    /* ========================================
       SMOOTH SCROLL
       ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ========================================
       STATS COUNTER ANIMATION
       ======================================== */
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const statsSection = document.querySelector('.stats');
        if (!statsSection) return;

        const statsSectionTop = statsSection.offsetTop;
        const statsSectionHeight = statsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > statsSectionTop + statsSectionHeight / 2) {
            statsAnimated = true;

            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target;
                    }
                };

                updateCounter();
            });
        }
    }

    window.addEventListener('scroll', animateStats);

    /* ========================================
       PROJECT FILTERS
       ======================================== */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || filter === category) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });

            // Clear search when changing filter
            if (searchInput) {
                searchInput.value = '';
                if (searchClear) searchClear.style.display = 'none';
            }
        });
    });

    /* ========================================
       PROJECT SEARCH
       ======================================== */
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();

            // Show/hide clear button
            if (searchClear) {
                searchClear.style.display = query ? 'block' : 'none';
            }

            // Reset category filter to "Todos" when searching
            if (query) {
                filterBtns.forEach(b => b.classList.remove('active'));
                const allBtn = document.querySelector('.filter__btn[data-filter="all"]');
                if (allBtn) allBtn.classList.add('active');
            }

            projectCards.forEach(card => {
                const title = card.querySelector('.project__title');
                const name = title ? title.textContent.toLowerCase() : '';

                if (!query || name.includes(query)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            this.style.display = 'none';
            // Show all cards
            projectCards.forEach(card => {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease forwards';
            });
        });
    }

    /* ========================================
       CONTACT FORM
       ======================================== */
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);

            // Here you would typically send the form data to a server
            // For now, we'll just show a success message

            // Simple validation
            const inputs = this.querySelectorAll('.form__input[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e53e3e';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (isValid) {
                // Show success message
                showNotification('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.', 'success');
                this.reset();
            } else {
                showNotification('Por favor, completá todos los campos requeridos.', 'error');
            }
        });
    }

    /* ========================================
       NOTIFICATION SYSTEM
       ======================================== */
    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification__close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            padding: 1rem 1.5rem;
            background-color: ${type === 'success' ? '#48bb78' : '#e53e3e'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 9999;
            animation: slideUp 0.3s ease;
        `;

        // Add keyframes
        if (!document.querySelector('#notification-keyframes')) {
            const style = document.createElement('style');
            style.id = 'notification-keyframes';
            style.textContent = `
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideUp 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    /* ========================================
       INTERSECTION OBSERVER FOR ANIMATIONS
       ======================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service__card, .project__card, .about__img-wrapper, .contact__item').forEach(el => {
        observer.observe(el);
    });

    /* ========================================
       PARALLAX EFFECT (OPTIONAL)
       ======================================== */
    const parallaxElements = document.querySelectorAll('.hero, .cta');

    function handleParallax() {
        const scrollY = window.scrollY;

        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.backgroundPositionY = `${scrollY * speed}px`;
        });
    }

    // Uncomment to enable parallax effect
    // window.addEventListener('scroll', handleParallax);

    /* ========================================
       NEWSLETTER FORM
       ======================================== */
    const newsletterForm = document.querySelector('.newsletter__form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('.newsletter__input');
            const email = emailInput.value.trim();

            if (email && isValidEmail(email)) {
                showNotification('¡Gracias por suscribirte a nuestro newsletter!', 'success');
                emailInput.value = '';
            } else {
                showNotification('Por favor, ingresá un email válido.', 'error');
            }
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /* ========================================
       PRELOADER (OPTIONAL)
       ======================================== */
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Initial scroll check
        handleScroll();
        highlightNavLink();
        animateStats();
    });
});
