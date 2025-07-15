document.addEventListener('click', function (e) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${e.clientX - 10}px`;
  ripple.style.top = `${e.clientY - 10}px`;
  ripple.style.width = '20px';
  ripple.style.height = '20px';

  document.body.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});

/*document.addEventListener('mousemove', function (e) {
  const butterfly = document.createElement('div');
  butterfly.className = 'butterfly';

  // Random offset for uneven/bunched look
  const offsetX = Math.random() * 40 - 20;
  const offsetY = Math.random() * 40 - 20;

  butterfly.style.left = `${e.clientX + offsetX}px`;
  butterfly.style.top = `${e.clientY + offsetY}px`;

  // Random rotation for more natural effect
  const rotation = Math.random() * 360;
  butterfly.style.transform = `rotate(${rotation}deg)`;

  // Use an emoji or an image
  butterfly.innerText = '💚';

  document.body.appendChild(butterfly);

  // Remove after animation
  setTimeout(() => {
    butterfly.remove();
  }, 1000);
});
*/