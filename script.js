document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.floating-nav');
    const toggleBtn = document.querySelector('.nav-toggle');
    
    // Toggle mobile menu
    toggleBtn.addEventListener('click', function() {
        navbar.classList.toggle('nav-expanded');
    });
    
    // Close menu when clicking a link (mobile only)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 769) {
                navbar.classList.remove('nav-expanded');
            }
        });
    });
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.top = '10px';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.top = '20px';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
        }
    });
});