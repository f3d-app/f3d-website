document.addEventListener('DOMContentLoaded', () => {
    const openNavBtn = document.querySelector('.open-nav-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-item-link');

    // Function to check if we're on mobile view
    const isMobileView = () => window.innerWidth < 992;

    // Toggle navigation
    openNavBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event from bubbling up

        if (navList.classList.contains('active')) {
            closeNavigation();
        } else {
            openNavigation();
        }
    });

    // Function to open navigation
    function openNavigation() {
        navList.classList.add('active');
        openNavBtn.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    // Function to close navigation
    function closeNavigation() {
        navList.classList.remove('active');
        openNavBtn.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close navigation when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileView() && navList.classList.contains('active')) {
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

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Clear the timeout
        clearTimeout(resizeTimer);

        // Add a class during resize to prevent transitions
        document.body.classList.add('resize-animation-stopper');

        // Set a timeout to remove the class after resizing is done
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');

            // Reset navigation state based on screen size
            if (!isMobileView()) {
                // Desktop mode - reset everything
                closeNavigation();
            }
        }, 250);
    });

    // Initialize navigation state based on screen size
    if (!isMobileView()) {
        closeNavigation();
    }
});