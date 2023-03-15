let warningContainer = document.querySelector(".warning-modal-container");
let warningOkButton = document.querySelector(".ok-warning-btn");
let warningCancelButton = document.querySelector(".cancel-btn");
let warningCloseButton = document.querySelector(".warning-modal-close");
let warningMessage = document.querySelector(".warning-message");
let deleteElement = null; 

function deleteItem(event) {
  deleteElement = event.target; 
  let userName=deleteElement.closest("tr").querySelector(".name");
  warningMessage.textContent = `Are you sure you want to delete user ${userName.textContent}?`;
  warningContainer.style.display = "block";
  warningOkButton.addEventListener("click", confirmDelete); 
}

function confirmDelete() { 
  let parent = deleteElement.parentNode.parentNode.parentNode;
  parent.remove();
  warningContainer.style.display = "none";
  warningMessage.textContent = " ";
  warningOkButton.removeEventListener("click", confirmDelete);
}

let deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((button) => {
  button.addEventListener("click", deleteItem);
});

function cancelDelete() {
  warningContainer.style.display = "none";
  warningMessage.textContent = " ";
  warningOkButton.removeEventListener("click", confirmDelete); 
}

warningCloseButton.addEventListener("click", cancelDelete);

warningCancelButton.addEventListener("click", cancelDelete);