document.getElementById('firecracker').addEventListener('click', function() {
    var firecracker = document.getElementById('firecracker');
    var sound = document.getElementById('explosion-sound');

    // Zamień SVG na GIF wybuchu
    firecracker.src = 'explosion/explosion.gif';

    // Odtwórz dźwięk
    sound.play();

    // Po zakończeniu animacji (3 sekundy), ukryj GIF i zatrzymaj dźwięk
    setTimeout(function() {
        firecracker.style.display = 'none';
        sound.pause();
        sound.currentTime = 0; // Zresetuj dźwięk do początku
    }, 3000); // 3000 milisekund = 3 sekundy
});
