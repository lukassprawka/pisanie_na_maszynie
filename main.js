const spnText = document.querySelector('.js-style>.text');
const spnCursor = document.querySelector('.js-style>.cursor');
const txt = ['Witaj Użytkowniku!', 'W czym mogę pomóc?'];
const time = 200;

let txtIndex = 0;
let charIndex = -2;

const addLetter = () => {
  if (charIndex >= 0) spnText.textContent += txt[txtIndex][charIndex];
  charIndex++;
  if (charIndex === txt[txtIndex].length) {
    txtIndex++;
    if (txtIndex === txt.length) return;

    setTimeout(() => {
      charIndex = -4;
      spnText.textContent = '';
      addLetter();
    }, 4 * time);
  } else {
    setTimeout(addLetter, time);
  }
}

addLetter();

const cursorAnimation = () => {
  spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, time);