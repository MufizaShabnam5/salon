document.addEventListener('DOMContentLoaded', () => {
    
    // Function to load external HTML components
    const loadComponent = async (url, placeholderId) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to load ${url}`);
            const html = await response.text();
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = html;
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Load Header and Footer concurrently
    Promise.all([
        loadComponent('navigation/navbar.html', 'header-placeholder'),
        loadComponent('navigation/footer.html', 'footer-placeholder')
    ]).then(() => {
        // Initialize interactive logic AFTER the components are loaded into the DOM
        initializeNavbarLogic();
        initializeFooterLogic();
    });

    function initializeNavbarLogic() {
        // Theme Toggle
        const themeBtn = document.getElementById('themeToggleBtn');
        const body = document.body;
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const currentTheme = body.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                body.setAttribute('data-theme', newTheme);
            });
        }

        // LTR / RTL Toggle
        const rtlBtn = document.getElementById('rtlToggleBtn');
        const html = document.documentElement;
        if (rtlBtn) {
            rtlBtn.addEventListener('click', () => {
                const currentDir = html.getAttribute('dir');
                html.setAttribute('dir', currentDir === 'ltr' ? 'rtl' : 'ltr');
            });
        }

        // Hamburger Menu
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (hamburgerBtn && mobileMenu) {
            hamburgerBtn.addEventListener('click', () => {
                hamburgerBtn.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                
                // Prevent scrolling on body when menu is open
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });
        }

        // Mobile Dropdown
        const mobileHomeToggle = document.getElementById('mobileHomeToggle');
        const mobileHomeDropdown = document.getElementById('mobileHomeDropdown');
        if (mobileHomeToggle && mobileHomeDropdown) {
            mobileHomeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isExpanded = mobileHomeDropdown.style.display === 'block';
                mobileHomeDropdown.style.display = isExpanded ? 'none' : 'block';
                // Rotate icon
                const icon = mobileHomeToggle.querySelector('.luxe-dropdown-icon');
                if (icon) {
                    icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
                }
            });
        }
    }
    
    function initializeFooterLogic() {
        // Auto-update copyright year
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
});
