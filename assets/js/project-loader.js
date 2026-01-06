// Project Page Loader
// This script handles loading shared components (navbar, footer) for project pages
// Place this in project-loader.js

const ProjectPageLoader = {
    async init() {
        console.log('🚀 Initializing Project Page Loader');
        
        // Load navbar
        await this.loadComponent('navbar', 'navbar-placeholder');
        
        // Load footer
        await this.loadComponent('footer', 'footer-placeholder');
        
        // Initialize theme system
        this.initializeTheme();
        
        // Initialize custom cursor
        this.initializeCursor();
        
        console.log('✅ Project Page Loader initialized');
    },
    
    async loadComponent(componentName, targetId) {
        const target = document.getElementById(targetId);
        if (!target) {
            console.error(`❌ Target element ${targetId} not found`);
            return;
        }
        
        try {
            // Adjust path based on location (project pages are in components/datasets/)
            const response = await fetch(`../../components/${componentName}.html`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const html = await response.text();
            target.innerHTML = html;
            console.log(`✓ Loaded ${componentName}`);
        } catch (error) {
            console.error(`❌ Error loading ${componentName}:`, error);
            target.innerHTML = `<div style="padding: 20px; text-align: center; color: #d32f2f;">
                Failed to load ${componentName}
            </div>`;
        }
    },
    
    initializeTheme() {
        // Get saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Wait for navbar to load, then set up theme toggle
        setTimeout(() => {
            const themeToggle = document.querySelector('.theme-toggle');
            if (themeToggle) {
                this.updateThemeIcon(savedTheme);
                
                themeToggle.addEventListener('click', () => {
                    const currentTheme = document.documentElement.getAttribute('data-theme');
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    
                    document.documentElement.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                    this.updateThemeIcon(newTheme);
                });
            }
        }, 100);
    },
    
    updateThemeIcon(theme) {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    },
    
    initializeCursor() {
        // Create custom cursor
        const cursor = document.getElementById('custom-cursor');
        if (!cursor) return;
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .action-btn, .download-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }
};

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ProjectPageLoader.init());
} else {
    ProjectPageLoader.init();
}

// Make available globally
window.ProjectPageLoader = ProjectPageLoader;