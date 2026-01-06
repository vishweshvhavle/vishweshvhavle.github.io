// Mobile Menu Toggle
function initMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const navTabs = document.querySelector('.nav-tabs');
    
    if (!navContainer || !navTabs) {
        console.log('Nav elements not found');
        return;
    }
    
    // Create hamburger button if it doesn't exist
    if (!document.querySelector('.mobile-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        
        // Append to nav container
        navContainer.appendChild(menuToggle);

        // Create mobile theme toggle button inside nav-tabs
        const mobileThemeBtn = document.createElement('li');
        mobileThemeBtn.innerHTML = `
            <button class="mobile-theme-toggle" onclick="toggleTheme()">
                <span id="mobile-theme-icon">☀️</span> Toggle Theme
            </button>
        `;
        navTabs.appendChild(mobileThemeBtn);
        
        // Update mobile theme icon based on current theme
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const mobileIcon = document.getElementById('mobile-theme-icon');
        if (mobileIcon) {
            mobileIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        }

        // Toggle menu on click
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navTabs.classList.toggle('active');
            menuToggle.innerHTML = isActive ? '✕' : '☰';
            console.log('Menu toggled:', isActive);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navContainer.contains(e.target) && navTabs.classList.contains('active')) {
                navTabs.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });

        // Close menu when clicking a nav item
        const navButtons = navTabs.querySelectorAll('.tab-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navTabs.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                }
            });
        });
        
        console.log('Mobile menu initialized');
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing mobile menu');
    initMobileMenu();
});

// Re-initialize on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navTabs = document.querySelector('.nav-tabs');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (navTabs) {
            navTabs.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.innerHTML = '☰';
        }
    }
});