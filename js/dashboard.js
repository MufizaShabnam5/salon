/* ============================================
   GLOW SALON — DASHBOARD LOGIC
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Theme & RTL from localStorage
    const savedTheme = localStorage.getItem('glow_theme') || 'light';
    const savedDir = localStorage.getItem('glow_dir') || 'ltr';
    
    document.body.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('dir', savedDir);

    // Initialize Chart.js with matching colors
    initCharts();

    // Set page title based on active section
    updatePageTitle('overview');

    // ScrollSpy to highlight sidebar links as user scrolls
    setupScrollSpy();
});

function setupScrollSpy() {
    const observerOptions = {
        root: document.querySelector('.dash-content'),
        rootMargin: '0px 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id.replace('section-', '');
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-item[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
                updatePageTitle(sectionId);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-section').forEach(sec => observer.observe(sec));
}

/**
 * Toggle Sidebar on Mobile
 */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

/**
 * Smooth Scroll to Section
 */
function switchSection(sectionId, event) {
    if (event) event.preventDefault();

    // Scroll directly to target
    const targetEl = document.getElementById('section-' + sectionId);
    if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Close sidebar on mobile
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        toggleSidebar();
    }
}

function updatePageTitle(sectionId) {
    const titleEl = document.getElementById('page-title');
    const titles = {
        'overview': 'Admin Dashboard',
        'appointments': 'Appointments',
        'clients': 'Client Management',
        'hair': 'Hair Studio',
        'skin': 'Skin Care Clinic',
        'spa': 'Spa & Wellness',
        'staff': 'Staff Management',
        'marketing': 'Marketing & Promos',
        'settings': 'Salon Settings'
    };
    if (titleEl && titles[sectionId]) {
        titleEl.textContent = titles[sectionId];
    }
}

/**
 * Toggle Theme (Light/Dark)
 */
function toggleDashTheme() {
    const body = document.body;
    const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('glow_theme', newTheme);
    
    // Update charts to reflect new theme colors
    initCharts();
}

/**
 * Toggle RTL/LTR
 */
function toggleDashRTL() {
    const html = document.documentElement;
    const currentDir = html.getAttribute('dir');
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    html.setAttribute('dir', newDir);
    localStorage.setItem('glow_dir', newDir);
}

/**
 * Chart.js Initialization
 */
let revenueChartInstance = null;
let serviceChartInstance = null;
let marketingChartInstance = null;

function initCharts() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#A39D98' : '#8E867D';
    const gridColor = isDark ? '#3D3835' : '#E6DDD3';
    const primaryColor = isDark ? '#D4B68D' : '#C4A47C';

    Chart.defaults.color = textColor;
    Chart.defaults.font.family = "'Inter', sans-serif";

    // 1. Revenue Chart (Line)
    const revCtx = document.getElementById('revenueChart');
    if (revCtx) {
        if (revenueChartInstance) revenueChartInstance.destroy();
        
        revenueChartInstance = new Chart(revCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Revenue ($)',
                    data: [1200, 1900, 1500, 2200, 1800, 2800, 2400],
                    borderColor: primaryColor,
                    backgroundColor: primaryColor + '33', // 20% opacity
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: isDark ? '#221F1E' : '#FFFFFF',
                    pointBorderColor: primaryColor,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: isDark ? '#1A1716' : '#FFFFFF',
                        titleColor: isDark ? '#F5EFEB' : '#332F2A',
                        bodyColor: isDark ? '#F5EFEB' : '#332F2A',
                        borderColor: gridColor,
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor, drawBorder: false },
                        border: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    }
                }
            }
        });
    }

    // 2. Service Popularity (Doughnut)
    const srvCtx = document.getElementById('serviceChart');
    if (srvCtx) {
        if (serviceChartInstance) serviceChartInstance.destroy();

        serviceChartInstance = new Chart(srvCtx, {
            type: 'doughnut',
            data: {
                labels: ['Hair Colouring', 'Spa Therapy', 'Nail & Hand Spa', 'Bridal Beauty'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        primaryColor,
                        isDark ? '#8A7356' : '#E8D5D1',
                        isDark ? '#4A3E2E' : '#E6DDD3',
                        isDark ? '#2B241C' : '#F5EFEB'
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { padding: 20, usePointStyle: true, pointStyle: 'circle' }
                    }
                }
            }
        });
    }

    // 3. Marketing Campaign Chart (Bar)
    const mktCtx = document.getElementById('marketingChart');
    if (mktCtx) {
        if (marketingChartInstance) marketingChartInstance.destroy();

        marketingChartInstance = new Chart(mktCtx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Email Opens',
                    data: [4500, 5200, 4800, 6100],
                    backgroundColor: primaryColor,
                    borderRadius: 4
                },
                {
                    label: 'Click Throughs',
                    data: [1200, 1800, 1500, 2100],
                    backgroundColor: isDark ? '#8A7356' : '#E8D5D1',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { usePointStyle: true, pointStyle: 'circle' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor, drawBorder: false },
                        border: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    }
                }
            }
        });
    }
}
