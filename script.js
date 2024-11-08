document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        // Randomize position within the viewport
        const randomTop = Math.random() * 100; // Random top position as a percentage of the viewport height
        const randomLeft = Math.random() * 100; // Random left position as a percentage of the viewport width
        
        star.style.top = `${randomTop}vh`;
        star.style.left = `${randomLeft}vw`;
    });
});
