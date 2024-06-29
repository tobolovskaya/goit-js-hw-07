function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищення контейнера перед додаванням нових елементів
  const initialSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.getElementById('btn-create').addEventListener('click', () => {
  const number = Number(document.getElementById('input-number').value.trim());
  if (number >= 1 && number <= 100) {
    createBoxes(number);
    document.getElementById('input-number').value = ''; // Очищення поля вводу
  }
});

document.getElementById('btn-destroy').addEventListener('click', () => {
  destroyBoxes();
});
