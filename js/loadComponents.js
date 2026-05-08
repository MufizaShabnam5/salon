document.addEventListener('DOMContentLoaded', () => {

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

    Promise.all([
        loadComponent('navigation/navbar.html', 'header-placeholder'),
        loadComponent('navigation/footer.html', 'footer-placeholder')
    ]).then(() => {

        initializeNavbarLogic();
        initializeFooterLogic();
    });

    function initializeNavbarLogic() {

        const themeBtn = document.getElementById('themeToggleBtn');
        const body = document.body;
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const currentTheme = body.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                body.setAttribute('data-theme', newTheme);
            });
        }

        const rtlBtn = document.getElementById('rtlToggleBtn');
        const html = document.documentElement;
        if (rtlBtn) {
            rtlBtn.addEventListener('click', () => {
                const currentDir = html.getAttribute('dir');
                html.setAttribute('dir', currentDir === 'ltr' ? 'rtl' : 'ltr');
            });
        }

        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (hamburgerBtn && mobileMenu) {
            hamburgerBtn.addEventListener('click', () => {
                hamburgerBtn.classList.toggle('active');
                mobileMenu.classList.toggle('active');

                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });
        }

        const mobileHomeToggle = document.getElementById('mobileHomeToggle');
        const mobileHomeDropdown = document.getElementById('mobileHomeDropdown');
        if (mobileHomeToggle && mobileHomeDropdown) {
            mobileHomeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isExpanded = mobileHomeDropdown.style.display === 'block';
                mobileHomeDropdown.style.display = isExpanded ? 'none' : 'block';

                const icon = mobileHomeToggle.querySelector('.luxe-dropdown-icon');
                if (icon) {
                    icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
                }
            });
        }

        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.luxe-nav-link, .luxe-dropdown-content a, .luxe-mobile-link, .luxe-mobile-dropdown a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath) {
                link.classList.add('active');

                const dropdown = link.closest('.luxe-dropdown');
                if (dropdown) {
                    const parentLink = dropdown.querySelector('.luxe-nav-link');
                    if (parentLink) parentLink.classList.add('active');
                }
            }
        });
    }
    
    function initializeFooterLogic() {

        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
});


