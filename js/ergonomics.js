// table
const tableTop = document.querySelector('.table__top');
const buttons = document.querySelector('.table__buttons');
const buttonUp = document.querySelector('.table__button_up');
const buttonDown = document.querySelector('.table__button_down');

buttons.addEventListener('click', (e) => {
  let currentValue = Number(tableTop.style.marginBottom.slice(0, -1));
  if (e.target == buttonUp) {
    up(currentValue);
  }
  if (e.target == buttonDown) {
    down(currentValue);
  }
  console.log(currentValue);
});

const up = (value) => {
  if (value < -9) {
    tableTop.style.marginBottom = `${value + 1}%`;
  }
};

const down = (value) => {
  if (value > -25) {
    tableTop.style.marginBottom = `${value - 1}%`;
  }
};

//transfer

const textBlock = document.querySelector('.table__text');
const body = document.querySelector('.table__body');
const transferItem = document.querySelector('.table__paragraph_mob');

const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener('resize', defineWidth);

function defineWidth() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (width <= 1250) {
    body.appendChild(transferItem);
    transferItem.style.order = '3';
    transferItem.classList.add('active');
    console.log('small');
  } else {
    if (transferItem.classList.contains('active')) {
      textBlock.appendChild(transferItem);
      transferItem.classList.remove('active');
    }
  }
}
defineWidth();
