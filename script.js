const backgroundMusic = document.getElementById('backgroundMusic');

// Check if the audio was playing before the page reload
window.addEventListener('load', () => {
    const wasPlaying = localStorage.getItem('isPlaying') === 'true';

    // Only attempt to play the audio after user interaction
    document.addEventListener('click', () => {
        if (wasPlaying) {
            backgroundMusic.play().catch(error => {
                console.log('Playback error:', error);
            });
        }
    }, { once: true }); // Once ensures it only triggers on the first click
});

// Automatically play the audio and save the state
backgroundMusic.addEventListener('play', () => {
    localStorage.setItem('isPlaying', 'true');
});

// If the user pauses the audio, update the localStorage to reflect that
backgroundMusic.addEventListener('pause', () => {
    localStorage.setItem('isPlaying', 'false');
});
