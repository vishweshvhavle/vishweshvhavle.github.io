// Theme Management
function initializeTheme() {
    // Check if theme exists in localStorage, otherwise default to dark
    let savedTheme = localStorage.getItem('theme');
    
    // If no saved theme, set dark as default
    if (!savedTheme) {
        savedTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
    
    const icon = document.getElementById('theme-icon');
    const mobileIcon = document.getElementById('mobile-theme-icon');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (icon) {
        icon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
    if (mobileIcon) {
        mobileIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const icon = document.getElementById('theme-icon');
    const mobileIcon = document.getElementById('mobile-theme-icon');
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (icon) {
        icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
    if (mobileIcon) {
        mobileIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Tab Management
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Update active button if it's not home (logo click)
    if (tabName !== 'home' && event && event.target) {
        event.target.classList.add('active');
    }
}

// Slideshow Management
let slideIndex = 0;

function initializeSlideshow() {
    showSlide(slideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    
    slideIndex = index;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides[slideIndex].classList.add('active');
    
    // Auto-advance slideshow
    setTimeout(() => {
        showSlide(slideIndex + 1);
    }, 5000);
}

// Custom Cursor
function initializeCursor() {
    const cursor = document.getElementById('custom-cursor');
    
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .news-item, .research-item, .tab-btn, .nav-logo-icon');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const navTabs = document.querySelector('.nav-tabs');
    
    if (!navContainer || !navTabs) return;
    
    // Create hamburger button if it doesn't exist
    if (!document.querySelector('.mobile-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        navContainer.appendChild(menuToggle);

        // Create mobile theme toggle button inside nav-tabs
        const mobileThemeBtn = document.createElement('button');
        mobileThemeBtn.className = 'mobile-theme-toggle';
        mobileThemeBtn.innerHTML = '<span id="mobile-theme-icon">☀️</span> Toggle Theme';
        mobileThemeBtn.onclick = () => {
            toggleTheme();
        };
        navTabs.appendChild(mobileThemeBtn);
        
        // Initialize theme icons
        initializeTheme();

        // Toggle menu on click
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navTabs.classList.toggle('active');
            menuToggle.innerHTML = navTabs.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navContainer.contains(e.target) && navTabs.classList.contains('active')) {
                navTabs.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });

        // Close menu when clicking a nav item (but not theme toggle)
        const navButtons = navTabs.querySelectorAll('.tab-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navTabs.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                }
            });
        });
    }
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initMobileMenu();
});

// Re-initialize on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navTabs = document.querySelector('.nav-tabs');
        if (navTabs) {
            navTabs.classList.remove('active');
        }
    }
});