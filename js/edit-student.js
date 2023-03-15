let title=document.querySelector(".edit-student-title");
let saveButton=document.querySelector('.save-btn');
let editElement = null;

function editStudent(event){
    toAdd = false;
    title.textContent="Edit student";  
    saveButton.textContent="Save";
    editElement=event.target;
    group.value = editElement.closest("tr").querySelector(".group-name").textContent;
    let studentName=editElement.closest("tr").querySelector(".name");
    let arr = studentName.textContent.split(" ");
    firstName.value= arr[0];
    lastName.value = arr[1];
    gender.value = editElement.closest("tr").querySelector(".gender-type").textContent;
    birthday.value = editElement.closest("tr").querySelector(".birthday-date").textContent;
    modalContainer.style.display = "block";
}



function confirmEdit(){
    student.group=editElement.closest("tr").querySelector(".group-name").textContent=group.value;
    student.name=editElement.closest("tr").querySelector(".name").textContent=`${firstName.value} ${lastName.value}`;
    student.gender=editElement.closest("tr").querySelector(".gender-type").textContent=gender.value;
    student.birthday=editElement.closest("tr").querySelector(".birthday-date").textContent=birthday.value;
    modalContainer.style.display = "none";

}

let editButtons = document.querySelectorAll(".edit-button");
editButtons.forEach((button) => {
button.addEventListener("click", editStudent);
});

