let title=document.querySelector(".edit-student-title");
let saveButton=document.querySelector('.save-btn');
let editElement = null;

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
    gender.value = editElement.querySelector(".gender-type").textContent;
    birthday.value = editElement.querySelector(".birthday-date").textContent;
    modalContainer.style.display = "block";
}



function confirmEdit(){
    editElement.closest("tr").querySelector(".group-name").textContent=group.value;
    editElement.closest("tr").querySelector(".name").textContent=`${firstName.value} ${lastName.value}`;
    editElement.closest("tr").querySelector(".gender-type").textContent=gender.value;
    editElement.closest("tr").querySelector(".birthday-date").textContent=birthday.value;

    let student = {
        group: group.value,
        firstName: firstName.value,
        lastName: lastName.value,
        gender: gender.value,
        birthday: birthday.value
    };
    let jsonString = JSON.stringify(student);
    console.log(jsonString);

    modalContainer.style.display = "none";

}

let editButtons = document.querySelectorAll(".edit-button");
editButtons.forEach((button) => {
button.addEventListener("click", editStudent);
});

