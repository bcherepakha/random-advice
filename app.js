const $advicePrimary = document.querySelector('.advice__content--primary');
const $adviceSecondary = document.querySelector('.advice__content--secondary');

updateText();

async function updateText() {
    const responce = await fetch('https://api.adviceslip.com/advice');
    const data = await responce.json();
    const text = data.slip.advice;

    $advicePrimary.innerText = text;
    $adviceSecondary.innerText = text;
}

const $hero = document.querySelector('.hero');

$hero.addEventListener('click', updateText);

setInterval(updateText, 5000);
