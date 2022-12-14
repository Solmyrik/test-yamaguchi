// animation
const hole = document.querySelector('.voice__hole');
const girl = document.querySelector('.voice__girl');

window.onload = () => {
  hole.classList.add('hole');
  setTimeout(() => {
    girl.classList.add('girl_up');
    setTimeout(() => {
      hole.classList.add('hole_reduce');
      setTimeout(() => {
        girl.style.bottom = '5%';
        girl.classList.add('girlmove');
      }, 3500);
    }, 5500);
  }, 6000);
};

//transfer

const voiceContent = document.querySelector('.voice__content');
const voiceContainer = document.querySelector('.voice__container');
const transferItem = document.querySelector('.voice__say');

const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener('resize', defineWidth);
function defineWidth() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (width <= 1249) {
    voiceContainer.appendChild(transferItem);
    transferItem.classList.add('active');
    console.log('small');
  } else {
    if (transferItem.classList.contains('active')) {
      voiceContent.appendChild(transferItem);
      transferItem.classList.remove('active');
    }
  }
}
defineWidth();
