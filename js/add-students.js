

const modalContainer = document.querySelector('.add-student-modal-container');
const modalOpenButton = document.querySelector('.add-button');


function openModal() {
  modalContainer.style.display = "block";
}

modalOpenButton.addEventListener("click", openModal);

const modalCloseButton = document.querySelector('.add-student-modal-close');

function closeModal() {
  modalContainer.style.display = "none";
}

modalCloseButton.addEventListener("click", closeModal);

const okButton=document.querySelector('.ok-btn');
const createButton=document.querySelector('.create-btn');

function addToTable() {

  let table = document.querySelector('.students__table');
  let group = document.querySelector('.group-combobox');
  let firstName = document.querySelector('.first-name-input');
  let lastName = document.querySelector('.last-name-input');
  let gender = document.querySelector('.gender-combobox');
  let birthday = document.querySelector('.birthday-input');

  let newRow = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    let newCell = document.createElement('td');
    newCell.style.padding = "10px";
    newRow.appendChild(newCell);
  }

  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  newRow.childNodes[0].appendChild(checkbox); 

  newRow.childNodes[1].textContent = group.value;
  newRow.childNodes[1].className = 'table-text';

  newRow.childNodes[2].textContent = `${firstName.value} ${lastName.value}`;
  newRow.childNodes[2].className = 'table-text';

  newRow.childNodes[3].textContent = gender.value;
  newRow.childNodes[3].className = 'table-text';

  newRow.childNodes[4].textContent = birthday.value;
  newRow.childNodes[4].className = 'table-text';

  let status = document.createElement('span');
  status.className = "status";
  newRow.childNodes[5].appendChild(status); 
  table.appendChild(newRow);

  let editButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  let options= document.createElement('div');
  options.appendChild(editButton);
  options.appendChild(deleteButton);
  options.className = "options";
  editButton.className = "edit-button";
  editButton.innerText="🖉";
  deleteButton.innerText="✖"
  deleteButton.className="delete-button";
  newRow.childNodes[6].appendChild(options); 

  deleteButton.addEventListener("click", deleteItem);

  closeModal();

  group.value=' ';
  firstName.value=' ';
  lastName.value= ' ';
  gender.value=' ';
  birthday .value= ' ';
}

okButton.addEventListener("click", addToTable);
createButton.addEventListener("click", addToTable);

let notificationStatus = document.querySelector('.notification-status');
let animationEnabled = false;

function animateStatus() {
  if (animationEnabled && notificationStatus) {
    if (notificationStatus.style.backgroundColor === "green") {
      notificationStatus.style.backgroundColor = "#bbb";
    } else {
      notificationStatus.style.backgroundColor = "green";
    }
  }
}




