// Tab Navigation with Component Loading
async function showTab(tabName) {
    console.log(`Switching to tab: ${tabName}`);
    
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick && onclick.includes(`'${tabName}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Get target tab
    const targetTab = document.getElementById(tabName);
    if (!targetTab) {
        console.error(`Tab element not found: ${tabName}`);
        return;
    }
    
    // Load component if needed (skip 'home' as it's pre-loaded)
    if (tabName !== 'home' && !targetTab.hasAttribute('data-loaded')) {
        console.log(`Loading component: ${tabName}`);
        await ComponentLoader.loadInto(tabName, tabName);
    }
    
    // Show the tab
    targetTab.classList.add('active');
}

// Make showTab available globally
window.showTab = showTab;