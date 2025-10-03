// Smart navigation scroll behavior with hysteresis
let lastScrollTop = 0;
let isHeaderVisible = true;
const hideThreshold = 80;  // Need to scroll down 80px to hide
const showThreshold = 60;  // Need to scroll up 60px to show

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('.site-header');

    if (!header) return;

    const scrollDelta = currentScroll - lastScrollTop;

    // If scrolling down and header is visible
    if (scrollDelta > 0 && isHeaderVisible && currentScroll > hideThreshold) {
        // Hide header
        header.classList.add('hidden');
        isHeaderVisible = false;
    }
    // If scrolling up and header is hidden
    else if (scrollDelta < 0 && !isHeaderVisible && Math.abs(scrollDelta) > showThreshold) {
        // Show header
        header.classList.remove('hidden');
        isHeaderVisible = true;
    }

    // Always show header when at top of page
    if (currentScroll <= 50) {
        header.classList.remove('hidden');
        isHeaderVisible = true;
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);