const audioPlayers = document.querySelectorAll('audio');

audioPlayers.forEach(player => {
    player.addEventListener('play', () => {
        player.closest('.audio-card').classList.add('playing');
    });

    player.addEventListener('pause', () => {
        player.closest('.audio-card').classList.remove('playing');
    });
});