document.addEventListener("DOMContentLoaded", function () {
    const bubbles = document.querySelectorAll('.bubble');
  
    const bubbleColors = [
      'rgba(255, 99, 132, 0.8)',    // Pink
      'rgba(54, 162, 235, 0.8)',    // Blue
      'rgba(255, 159, 64, 0.8)',    // Orange
      'rgba(75, 192, 192, 0.8)',    // Turquoise
      'rgba(153, 102, 255, 0.8)',   // Purple
      'rgba(255, 205, 86, 0.8)'     // Yellow
    ];
  
    bubbles.forEach(bubble => {
      // Random starting positions off the screen
      const startX = Math.random() < 0.5 ? -100 + 'vw' : 100 + 'vw';  // Randomly start left or right
      const startY = Math.random() < 0.5 ? -100 + 'vh' : 100 + 'vh';  // Randomly start top or bottom
  
      // Random positions to move within the screen
      const randomX = Math.random() * 100 + 'vw';  // Random X position between 0 and 100% width
      const randomY = Math.random() * 100 + 'vh';  // Random Y position between 0 and 100% height
  
      // Random final positions to end off-screen
      const endX = Math.random() < 0.5 ? -100 + 'vw' : 100 + 'vw'; // Randomly end left or right
      const endY = Math.random() < 0.5 ? -100 + 'vh' : 100 + 'vh'; // Randomly end top or bottom
  
      // Apply random positions using CSS custom properties
      bubble.style.setProperty('--start-x', startX);
      bubble.style.setProperty('--start-y', startY);
      bubble.style.setProperty('--random-x', randomX);
      bubble.style.setProperty('--random-y', randomY);
      bubble.style.setProperty('--end-x', endX);
      bubble.style.setProperty('--end-y', endY);
  
      // Apply random color from bubbleColors array
      const randomColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
      bubble.style.backgroundColor = randomColor;
  
      // Apply random animation delay for a staggered effect
      bubble.style.animationDelay = `${Math.random() * 5}s`;
    });
  });
  