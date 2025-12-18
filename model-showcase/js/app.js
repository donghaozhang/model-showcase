/**
 * QCut AI Models Showcase
 * Main JavaScript file
 * 
 * Features:
 * - Scroll animations with Intersection Observer
 * - Smooth scroll navigation
 * - Parallax particle effects
 */

// ============================================
// Scroll Animation Observer
// ============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize scroll animations
function initScrollAnimations() {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Smooth Scroll Navigation
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Parallax Particle Effects
// ============================================
function initParallaxParticles() {
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.5;
            const xOffset = (x - 0.5) * speed * 20;
            const yOffset = (y - 0.5) * speed * 20;
            particle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// ============================================
// Model Cards Glow Effect (follows cursor)
// ============================================
function initCardGlowEffect() {
    const cards = document.querySelectorAll('.model-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// ============================================
// Initialize All Features
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initSmoothScroll();
    initParallaxParticles();
    initCardGlowEffect();

    console.log('QCut AI Models Showcase loaded successfully!');
});
