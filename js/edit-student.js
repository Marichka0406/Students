let title=document.querySelector(".edit-student-title");
let saveButton=document.querySelector('.save-btn');
let editElement = null;
let editIndex =0; 

function editStudent(event){
    toAdd = false;
    title.textContent = "Edit student";
    saveButton.textContent = "Save";
    editElement = event.target.closest("tr"); 
    group.value = editElement.querySelector(".group-name").textContent;
    let studentName = editElement.querySelector(".name");
    let arr = studentName.textContent.split(" ");
    firstName.value = arr[0];
    lastName.value = arr[1];
    editIndex = students.findIndex(s => s.firstName === firstName.value && s.lastName === lastName.value);
    gender.value = editElement.querySelector(".gender-type").textContent;
    birthday.value = editElement.querySelector(".birthday-date").textContent;
    modalContainer.style.display = "block";
}


function confirmEdit(){
    editElement.closest("tr").querySelector(".group-name").textContent=group.value;
    editElement.closest("tr").querySelector(".name").textContent=`${firstName.value} ${lastName.value}`;
    editElement.closest("tr").querySelector(".gender-type").textContent=gender.value;
    editElement.closest("tr").querySelector(".birthday-date").textContent=birthday.value;
    students[editIndex].group = group.value;
    students[editIndex].firstName = firstName.value;
    students[editIndex].lastName = lastName.value;
    students[editIndex].gender = gender.value;
    students[editIndex].birthday = birthday.value;
    console.log(students);
    let jsonString = JSON.stringify(students[editIndex]);
    console.log(jsonString);

    modalContainer.style.display = "none";

}

let editButtons = document.querySelectorAll(".edit-button");
editButtons.forEach((button) => {
button.addEventListener("click", editStudent);
});

