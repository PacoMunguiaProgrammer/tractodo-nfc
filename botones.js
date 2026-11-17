const buttons = document.querySelectorAll('.tile, .contacts a, .pdf-top a, .back-link');

for (const button of buttons) {
  button.addEventListener('pointerdown', (event) => {
    if (event.isPrimary && (event.pointerType === 'touch' || event.pointerType === 'pen')) {
      button.classList.add('is-pressed');
    }
  });

  const release = () => button.classList.remove('is-pressed');
  button.addEventListener('pointerup', release);
  button.addEventListener('pointercancel', release);
  button.addEventListener('lostpointercapture', release);
}
