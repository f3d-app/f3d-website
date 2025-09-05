document.addEventListener('DOMContentLoaded', () => {
    const openNavBtn = document.querySelector('.open-nav-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-item-link');

    const MOBILE_BREAKPOINT = 992;

    // Check if we're on mobile view
    const isMobileView = () => window.innerWidth < MOBILE_BREAKPOINT;

    // Open navigation
    function openNavigation() {
        navList.classList.add('active');
        openNavBtn.classList.add('active');
        document.body.classList.add('nav-open');
    }

    // Close navigation
    function closeNavigation() {
        navList.classList.remove('active');
        openNavBtn.classList.remove('active');
        document.body.classList.remove('nav-open');
    }

    // Toggle navigation on button click
    openNavBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (navList.classList.contains('active')) {
            closeNavigation();
        } else {
            openNavigation();
        }
    });

    // Close navigation when a link is clicked (mobile only)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileView()) {
                closeNavigation();
            }
        });
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInside = navList.contains(event.target) || openNavBtn.contains(event.target);
        if (isMobileView() && navList.classList.contains('active') && !isClickInside) {
            closeNavigation();
        }
    });

    // Handle window resize - prevent transition animations during resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Add a class to disable transitions during resize
        document.body.classList.add('resize-animation-stopper');

        // Force correct state when crossing breakpoint
        if (!isMobileView()) {
            closeNavigation();
        }

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 100);
    });
});