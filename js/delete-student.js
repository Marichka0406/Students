let warningContainer = document.querySelector('.warning-modal-container');
let warningOkButton = document.querySelector('.ok-warning-btn');
let warningCancelButton = document.querySelector('.cancel-btn');
let warningCloseButton = document.querySelector('.warning-modal-close');
let warningMessage=document.querySelector('.warning-message');
//let userFirstName = document.querySelector('.first-name-input');
//let userLastName = document.querySelector('.last-name-input');

function deleteItem(event) {
  let deleteElement = event.target;
  let parent = deleteElement.parentNode.parentNode.parentNode;
  warningMessage.textContent = `Are you sure you want to delete user ?`;
  warningContainer.style.display = "block";
  warningOkButton.addEventListener("click", () => {
    parent.remove();
    warningContainer.style.display = "none";
    warningMessage.textContent=" ";
  });
}




let deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(button => {
  button.addEventListener("click", deleteItem);
});

function cancelDelete() {
  //button.deleteEventListener("click", deleteItem);
  warningContainer.style.display = "none";
  warningMessage.textContent=" ";
}

warningCloseButton.addEventListener("click", cancelDelete);

warningCancelButton.addEventListener("click", cancelDelete);

