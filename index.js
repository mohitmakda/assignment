const items = document.querySelectorAll('.item');
const droppedContainer = document.getElementById('droppedContainer');
const resetButton = document.getElementById('resetButton');
const successMessage = document.getElementById('successMessage');

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

droppedContainer.addEventListener('dragover', dragOver);
droppedContainer.addEventListener('dragenter', dragEnter);
droppedContainer.addEventListener('dragleave', dragLeave);
droppedContainer.addEventListener('drop', drop);

resetButton.addEventListener('click', resetContainers);

let draggedItem = null;

function dragStart() {
  draggedItem = this;
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();

}

function dragLeave() {
    
}

function drop() {
  droppedContainer.appendChild(draggedItem);

  successMessage.textContent = 'Item successfully dropped!';
  successMessage.style.display = 'block';
}

function resetContainers() {
  droppedContainer.innerHTML = '';
  successMessage.style.display = 'none';
  items.forEach(item => {
    document.querySelector('.container').appendChild(item);
  });
}
