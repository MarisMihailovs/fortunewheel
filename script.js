const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');

let value = Math.ceil(Math.random() * 3600);

spinBtn.addEventListener('click', () => {
    wheel.style.transform = `rotate(${value}deg)`;
    value += Math.ceil(Math.random() * 3600);
})