const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

const taskList = document.querySelector('.list-container ul')
const listItems = taskList.children;


function attachRemoveBtn(li){
  let remove = document.createElement('button')
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < listItems.length; i++) {
  attachRemoveBtn(listItems[i]);
}


taskList.addEventListener('click', (event)=> {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    li.remove();
  }
})

// CREATE LI ELEMENT 
btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveBtn(li);
  ul.appendChild(li);
  input.value = '';
});


// btnRemove.addEventListener('click', () => {
//   const lastItem = document.querySelector('li:last-child');
//   lastItem.remove();
//   }
// );


// HIDE / SHOW LIST
btnToggle.addEventListener('click', () => {
const listContainer = document.querySelector('.list-container');

  if(listContainer.style.display === 'none'){ 
    listContainer.removeAttribute('style');
    btnToggle.textContent = 'Hide List';
    
  } else {
    listContainer.style.display = 'none'
    btnToggle.textContent = 'Show List';
  };
                           
});