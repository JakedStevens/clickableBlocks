const addBtn = document.querySelector('.add-btn');
const blockContainer = document.querySelector('#block-box');

function createBlockGroup(numberOfBlocks) {
  for (let i = 0; i < numberOfBlocks; i++) {
    const block = document.createElement('div');
    block.classList.add('block')
    block.textContent = Math.floor(Math.random() * 1000);
    blockContainer.appendChild(block);
  }
}

function addBlocks() {
  createBlockGroup(5);
}

function toggleStyle(event) {
  if (event.target.classList.contains('block-container') === false) {
    event.target.classList.toggle('selected');
  }
}

addBtn.addEventListener('click', addBlocks);
blockContainer.addEventListener('click', toggleStyle);
