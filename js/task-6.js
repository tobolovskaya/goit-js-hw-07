function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear the container before adding new boxes
  const initialSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const box = document.createElement('div');
    box.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', function () {
  const input = document.querySelector('input[type="number"]');
  const value = Number(input.value);
  
  if (value >= 1 && value <= 100) {
    createBoxes(value);
    input.value = ''; // Clear input after creating boxes
  }
});

document.querySelector('[data-destroy]').addEventListener('click', function () {
  destroyBoxes();
});
