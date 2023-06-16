const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const audio = document.querySelector('audio');
let value = Math.ceil(Math.random() * 3600);

spinBtn.addEventListener('click', () => {
    wheel.style.transform = `rotate(${value}deg)`;
    value += Math.ceil(Math.random() * 3600);
    audio.playbackRate = 2;
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 5000);
});