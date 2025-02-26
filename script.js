document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    
    // Randomly position and set unique properties for each star
    stars.forEach(star => {
        // Random starting positions - these supplement the CSS positioning
        // to add more variety without overriding the base positions
        const randomOffsetX = Math.random() * 30 - 15; // -15px to +15px
        const randomOffsetY = Math.random() * 30 - 15; // -15px to +15px
        
        // Apply the random offsets
        const currentTop = parseFloat(getComputedStyle(star).top);
        const currentLeft = parseFloat(getComputedStyle(star).left);
        
        star.style.top = `${currentTop + randomOffsetY}px`;
        star.style.left = `${currentLeft + randomOffsetX}px`;
        
        // Randomize animation speed slightly for more natural movement
        const baseSpeed = parseFloat(getComputedStyle(star).getPropertyValue('--falling-duration') || '3s');
        const speedVariation = baseSpeed * (Math.random() * 0.4 - 0.2); // ±20% variation
        
        // Set slightly adjusted animation speed
        star.style.setProperty('--falling-duration', `${baseSpeed + speedVariation}s`);
        star.style.setProperty('--tail-duration', `${baseSpeed + speedVariation}s`);
        star.style.setProperty('--shining-duration', `${baseSpeed + speedVariation}s`);
        
        // Small random rotation adjustments
        const randomRotation = Math.random() * 6 - 3; // -3deg to +3deg
        const finalRotate = parseFloat(getComputedStyle(star).getPropertyValue('--final-rotate') || '0deg');
        star.style.setProperty('--final-rotate', `${finalRotate + randomRotation}deg`);
    });
});
