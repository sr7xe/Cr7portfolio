const headerBackground = document.querySelector('.header-background');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Adjust the opacity based on scroll position
    headerBackground.style.opacity = 1 - (scrollY / 500); // Change 500 to control when the image disappears
});
