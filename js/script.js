const popupTrigger = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.btn');

popupTrigger.addEventListener('click', () => {
  popup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});
