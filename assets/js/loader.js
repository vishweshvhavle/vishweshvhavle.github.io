// Component Loader
const ComponentLoader = {
    cache: {},
    loading: {},
    
    async loadComponent(componentName) {
        // Check cache first
        if (this.cache[componentName]) {
            console.log(`✓ Loading ${componentName} from cache`);
            return this.cache[componentName];
        }
        
        // Check if already loading
        if (this.loading[componentName]) {
            console.log(`⏳ Waiting for ${componentName} to finish loading`);
            return this.loading[componentName];
        }
        
        // Start loading
        console.log(`📥 Fetching components/${componentName}.html`);
        this.loading[componentName] = fetch(`components/${componentName}.html`)
            .then(response => {
                console.log(`Response status for ${componentName}:`, response.status);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                console.log(`✅ Successfully loaded ${componentName}`);
                this.cache[componentName] = html;
                delete this.loading[componentName];
                return html;
            })
            .catch(error => {
                console.error(`❌ Error loading ${componentName}:`, error);
                delete this.loading[componentName];
                return `<div class="error-message" style="padding: 40px; text-align: center; color: #d32f2f;">
                    <h3>⚠️ Failed to load ${componentName}</h3>
                    <p>Error: ${error.message}</p>
                    <p>Make sure the file exists at: components/${componentName}.html</p>
                </div>`;
            });
        
        return this.loading[componentName];
    },
    
    async loadInto(componentName, targetId) {
        const target = document.getElementById(targetId);
        if (!target) {
            console.error(`❌ Target element ${targetId} not found`);
            return;
        }
        
        // Check if already loaded
        if (target.hasAttribute('data-loaded')) {
            console.log(`✓ ${componentName} already loaded in ${targetId}`);
            return;
        }
        
        // Show loading state
        target.innerHTML = '<div class="loading" style="padding: 40px; text-align: center; color: #666;">⏳ Loading...</div>';
        
        // Load component
        const html = await this.loadComponent(componentName);
        target.innerHTML = html;
        target.setAttribute('data-loaded', 'true');
        
        console.log(`✓ Inserted ${componentName} into ${targetId}`);
    }
};

// Make available globally
window.ComponentLoader = ComponentLoader;

console.log('✅ ComponentLoader initialized');