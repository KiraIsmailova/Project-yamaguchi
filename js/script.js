const buttonUp = document.querySelector('.block__buttons .block__button:first-child');
const buttonDown = document.querySelector('.block__buttons .block__button:last-child');

function moveTableUp() { 
  const tableImage = document.querySelector('.block__image-top'); 
  tableImage.style.transform = 'translateY(-50px)'; 
}

function moveTableDown() { 
  const tableImage = document.querySelector('.block__image-top'); 
  tableImage.style.transform = 'translateY(0)';
}

buttonUp.addEventListener('click', () => { 
  moveTableUp();
});

buttonDown.addEventListener('click', () => { 
  moveTableDown();
});
