
let modalContainer = document.querySelector('.add-student-modal-container');
let modalOpenButton = document.querySelector('.add-button');
let addStudentTitle = document.querySelector(".add-student-title");
let toAdd = false;
let group = document.querySelector('.group-combobox');
let firstName = document.querySelector('.first-name-input');
let lastName = document.querySelector('.last-name-input');
let gender = document.querySelector('.gender-combobox');
let birthday = document.querySelector('.birthday-input');
let form = document.getElementById('studentForm');
let hiddenInput = document.getElementsByName('id')[0];
const firstNameRegex = /^(?!-)[a-zA-Z-]{2,50}(?<!-)$/;
const lastNameRegex = /^(?!-)[a-zA-Z-]{2,50}(?<!-)$/;

function openModal() {
  toAdd = true;
  group.selectedIndex = 0;
  firstName.value = '';
  lastName.value = '';
  gender.selectedIndex = 0;
  birthday.value = '';
  modalContainer.style.display = "block";
  addStudentTitle.textContent = "Add Student";
  createButton.textContent = "Create";
}

modalOpenButton.addEventListener("click", openModal);

const modalCloseButton = document.querySelector('.add-student-modal-close');

function closeModal() {
  modalContainer.style.display = "none";
}

modalCloseButton.addEventListener("click", closeModal);

let okButton = document.querySelector('.ok-btn');
let createButton = document.querySelector('.create-btn');

function addToTable() {

  hiddenInput.value++;
  console.log(hiddenInput.value);

  let table = document.querySelector('.students__table');

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
  newRow.childNodes[1].className = 'group-name';
  newRow.childNodes[1].setAttribute('required', '');

  newRow.childNodes[2].textContent = `${firstName.value} ${lastName.value}`;
  newRow.childNodes[2].className = 'name';
  newRow.childNodes[2].setAttribute('required', '');

  newRow.childNodes[3].textContent = gender.value;
  newRow.childNodes[3].className = 'gender-type';
  newRow.childNodes[3].setAttribute('required', '');

  newRow.childNodes[4].textContent = birthday.value;
  newRow.childNodes[4].className = 'birthday-date';
  newRow.childNodes[4].setAttribute('required', '');

  let status = document.createElement('span');
  status.className = "status";
  newRow.childNodes[5].appendChild(status);
  table.appendChild(newRow);

  let editButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  let options = document.createElement('div');
  options.appendChild(editButton);
  options.appendChild(deleteButton);
  options.className = "options";
  editButton.className = "edit-button";
  editButton.innerText = "🖉";
  deleteButton.innerText = "✖"
  deleteButton.className = "delete-button";
  newRow.childNodes[6].appendChild(options);

  let student = {
    group: group.value,
    firstName: firstName.value,
    lastName: lastName.value,
    gender: gender.value,
    birthday: birthday.value
  };
  let jsonString = JSON.stringify(student);
  console.log(jsonString);

  deleteButton.addEventListener("click", deleteItem);
  editButton.addEventListener("click", editStudent);

  closeModal();
}


okButton.addEventListener("click", function () {
  if (!firstNameRegex.test(firstName.value)) {
    firstName.setCustomValidity("Некоректно введено ім'я!");
  }
  else {
    firstName.setCustomValidity('');
  }
  firstName.reportValidity();
  if (!lastNameRegex.test(lastName.value)) {
    lastName.setCustomValidity("Некоректно введено прізвище!");
  }
  else {
    lastName.setCustomValidity('');
  }
  lastName.reportValidity();
  if (form.checkValidity()) {
    if (toAdd) {
      addToTable();
    }
    else {
      confirmEdit();
    }
  }
});

createButton.addEventListener("click", function () {
  if (!firstNameRegex.test(firstName.value)) {
    firstName.setCustomValidity("Некоректно введено ім'я!");
  }
  else {
    firstName.setCustomValidity('');
  }
  firstName.reportValidity();
  if (!lastNameRegex.test(lastName.value)) {
    lastName.setCustomValidity("Некоректно введено прізвище!");
  }
  else {
    lastName.setCustomValidity('');
  }
  lastName.reportValidity();
  if (form.checkValidity()) {
    if (toAdd) {
      addToTable();
    }
    else {
      confirmEdit();
    }
  }
});








