const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const audio = document.querySelector('.sound');
const audioApplause = document.querySelector('.applause');
let value = Math.ceil(Math.random() * 3600) + 540;

spinBtn.addEventListener('click', () => {
    wheel.style.transform = `rotate(${value}deg)`;
    value += Math.ceil(Math.random() * 3600);
    audio.playbackRate = 2;
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        window.confetti({
            particleCount: 100,
            spread: 180
        });
        audioApplause.play();
    }, 5000);
    audioApplause.currentTime = 0;
});