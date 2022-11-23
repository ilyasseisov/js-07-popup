// Variables

const popupTrigger = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.btn');

// Functions

const showPopup = () => {
  popup.classList.add('show');
};

const hidePopup = () => {
  popup.classList.remove('show');
};

// Event Listeners

popupTrigger.addEventListener('click', showPopup);
closeBtn.addEventListener('click', hidePopup);
