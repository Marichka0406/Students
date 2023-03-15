
let modalContainer = document.querySelector('.add-student-modal-container');
let modalOpenButton = document.querySelector('.add-button');
let addStudentTitle=document.querySelector(".add-student-title");
let toAdd=false;
let group = document.querySelector('.group-combobox');
let firstName = document.querySelector('.first-name-input');
let lastName = document.querySelector('.last-name-input');
let gender = document.querySelector('.gender-combobox');
let birthday = document.querySelector('.birthday-input');
let form = document.getElementById('studentForm');
let student= {
  group:"PZ-23",
  name:  "Maria Kurhanevych",
  gender: "F",
  birthday:"2004-06-04",
  status:"non-active"
};
let jsonString = '';


function openModal() {
  toAdd=true;
  group.selectedIndex = 0;
  firstName.value='';
  lastName.value= '';
  gender.selectedIndex = 0;
  birthday .value= '';
  modalContainer.style.display = "block";
  addStudentTitle.textContent="Add Student";
  createButton.textContent="Create";
}

modalOpenButton.addEventListener("click", openModal);

const modalCloseButton = document.querySelector('.add-student-modal-close');

function closeModal() {
  modalContainer.style.display = "none";
}

modalCloseButton.addEventListener("click", closeModal);

let okButton=document.querySelector('.ok-btn');
let createButton=document.querySelector('.create-btn');

function addToTable() {

 
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

  student.group=newRow.childNodes[1].textContent = group.value;
  newRow.childNodes[1].className = 'group-name'; 
  newRow.childNodes[1].setAttribute('required', '');

  student.name=newRow.childNodes[2].textContent = `${firstName.value} ${lastName.value}`;
  newRow.childNodes[2].className = 'name';
  newRow.childNodes[2].setAttribute('required', '');

  student.gender=newRow.childNodes[3].textContent = gender.value;
  newRow.childNodes[3].className = 'gender-type';
  newRow.childNodes[3].setAttribute('required', '');

  student.birthday=newRow.childNodes[4].textContent = birthday.value;
  newRow.childNodes[4].className = 'birthday-date';
  newRow.childNodes[4].setAttribute('required', '');
  
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
  editButton.addEventListener("click",editStudent);

  closeModal();
}


okButton.addEventListener("click", function(){
  if(form.checkValidity()){
  if(toAdd){
    addToTable();   
    jsonString = JSON.stringify(student);
    console.log(jsonString);
  
  }
  else{
    confirmEdit();
    jsonString = JSON.stringify(student);
    console.log(jsonString); 
  }
  }
});

createButton.addEventListener("click", function(){
  if(form.checkValidity()){
  if(toAdd){
    addToTable(); 
    jsonString = JSON.stringify(student);
    console.log(jsonString);
  }
  else{
    confirmEdit();
    jsonString = JSON.stringify(student);
    console.log(jsonString);
  }
  }
});

function checkSpaces(input) {
  return !(input.value.indexOf(' ') >= 0);
}
firstName.addEventListener('input', function() {
  firstName.setCustomValidity(checkSpaces(firstName) ? '' : 'Заповніть дані коректно.');
});

lastName.addEventListener('input', function() {
  lastName.setCustomValidity(checkSpaces(lastName) ? '' : 'Заповніть дані коректно.');
});






