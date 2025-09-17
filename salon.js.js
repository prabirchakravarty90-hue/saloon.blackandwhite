// JavaScript for toggling the menu
// JavaScript for toggling the menu
function toggleMenu() {
    var nav = document.querySelector('.menu');
    nav.classList.toggle('active');
}

// JavaScript for smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
