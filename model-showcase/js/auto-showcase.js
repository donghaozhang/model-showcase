/**
 * Auto Showcase Script
 * Automatically cycles through model cards for video recording
 *
 * Usage:
 * 1. Add this script to your HTML: <script src="js/auto-showcase.js"></script>
 * 2. Open browser console and run: startAutoShowcase()
 * 3. To stop: stopAutoShowcase()
 */

let showcaseInterval = null;
let currentCardIndex = 0;

// Configuration
const config = {
    cardDisplayTime: 4000,      // Time to show each card (ms)
    scrollDelay: 500,            // Delay before showing overlay after scroll (ms)
    pauseBetweenCards: 1000,     // Pause between cards (ms)
    autoStart: false             // Set to true to start automatically on page load
};

/**
 * Start the automatic showcase
 */
function startAutoShowcase(options = {}) {
    // Merge options with defaults
    const settings = { ...config, ...options };

    console.log('🎬 Starting Auto Showcase...');
    console.log(`⏱️  Card display time: ${settings.cardDisplayTime}ms`);

    // Get all model cards
    const cards = document.querySelectorAll('.model-card');

    if (cards.length === 0) {
        console.error('❌ No model cards found!');
        return;
    }

    console.log(`📋 Found ${cards.length} model cards`);
    currentCardIndex = 0;

    // Function to show a specific card
    function showCard(index) {
        if (index >= cards.length) {
            console.log('✅ Showcase complete! Restarting from beginning...');
            currentCardIndex = 0;
            index = 0;
        }

        const card = cards[index];
        console.log(`👉 Showing card ${index + 1}/${cards.length}: ${card.querySelector('h3').textContent}`);

        // Scroll to card
        card.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Wait for scroll, then trigger hover effect
        setTimeout(() => {
            // Add hover class to show overlay
            card.classList.add('force-hover');

            // Remove hover class after display time
            setTimeout(() => {
                card.classList.remove('force-hover');

                // Wait a bit, then move to next card
                setTimeout(() => {
                    currentCardIndex++;
                    showCard(currentCardIndex);
                }, settings.pauseBetweenCards);

            }, settings.cardDisplayTime);

        }, settings.scrollDelay);
    }

    // Start showing cards
    showCard(currentCardIndex);

    console.log('▶️  Auto showcase started! Run stopAutoShowcase() to stop.');
}

/**
 * Stop the automatic showcase
 */
function stopAutoShowcase() {
    if (showcaseInterval) {
        clearInterval(showcaseInterval);
        showcaseInterval = null;
    }

    // Remove all hover classes
    document.querySelectorAll('.model-card').forEach(card => {
        card.classList.remove('force-hover');
    });

    console.log('⏹️  Auto showcase stopped');
    currentCardIndex = 0;
}

/**
 * Pause the showcase
 */
function pauseAutoShowcase() {
    if (showcaseInterval) {
        clearInterval(showcaseInterval);
        showcaseInterval = null;
        console.log('⏸️  Auto showcase paused');
    }
}

/**
 * Resume the showcase
 */
function resumeAutoShowcase() {
    if (!showcaseInterval) {
        startAutoShowcase();
        console.log('▶️  Auto showcase resumed');
    }
}

// Add CSS for forced hover state
const style = document.createElement('style');
style.textContent = `
    .model-card.force-hover .model-overlay {
        opacity: 1;
        visibility: visible;
    }

    .model-card.force-hover {
        transform: translateY(-8px);
    }

    /* Trigger list item animations for force-hover */
    .model-card.force-hover .supported-models li {
        animation: typeIn 0.4s ease-out forwards;
    }

    .model-card.force-hover .supported-models li:nth-child(1) { animation-delay: 0.15s; }
    .model-card.force-hover .supported-models li:nth-child(2) { animation-delay: 0.25s; }
    .model-card.force-hover .supported-models li:nth-child(3) { animation-delay: 0.35s; }
    .model-card.force-hover .supported-models li:nth-child(4) { animation-delay: 0.45s; }
    .model-card.force-hover .supported-models li:nth-child(5) { animation-delay: 0.55s; }
    .model-card.force-hover .supported-models li:nth-child(6) { animation-delay: 0.65s; }
`;
document.head.appendChild(style);

// Auto-start if configured
if (config.autoStart) {
    window.addEventListener('load', () => {
        setTimeout(() => startAutoShowcase(), 2000);
    });
}

// Make functions globally available
window.startAutoShowcase = startAutoShowcase;
window.stopAutoShowcase = stopAutoShowcase;
window.pauseAutoShowcase = pauseAutoShowcase;
window.resumeAutoShowcase = resumeAutoShowcase;

console.log('✨ Auto Showcase script loaded!');
console.log('📝 Commands:');
console.log('   startAutoShowcase()  - Start the showcase');
console.log('   stopAutoShowcase()   - Stop the showcase');
console.log('   pauseAutoShowcase()  - Pause the showcase');
console.log('   resumeAutoShowcase() - Resume the showcase');
console.log('');
console.log('🎨 Custom timing example:');
console.log('   startAutoShowcase({ cardDisplayTime: 5000, pauseBetweenCards: 500 })');
