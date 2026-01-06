// Custom Cursor Implementation
(function() {
    console.log('Custom cursor script loaded');
    
    function initCursor() {
        const cursor = document.getElementById('custom-cursor');
        
        if (!cursor) {
            console.error('Custom cursor element not found!');
            return;
        }
        
        console.log('Custom cursor element found');
        
        // Update cursor position on mousemove
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll(
            'button, a, input, textarea, select, [onclick], .tab-btn, .nav-logo-icon, .iit-logo'
        );
        
        console.log('Found ' + interactiveElements.length + ' interactive elements');
        
        interactiveElements.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                cursor.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', function() {
                cursor.classList.remove('hover');
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', function() {
            cursor.style.opacity = '1';
        });
        
        console.log('Custom cursor initialized successfully');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCursor);
    } else {
        initCursor();
    }
})();