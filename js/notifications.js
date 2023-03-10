let notificationStatus = document.querySelector(".notification-status");
let animationEnabled = false;

function animateStatus() {
  if (animationEnabled) {
    if (notificationStatus.style.backgroundColor === "green") {
      notificationStatus.style.backgroundColor = "#bbb";
    } else {
      notificationStatus.style.backgroundColor = "green";
    }
  }
}

notificationStatus.addEventListener("click", function () {
  animationEnabled = true;
});

document.addEventListener("click", function (event) {
  if (event.target !== notificationStatus) {
    animationEnabled = false;
    notificationStatus.style.backgroundColor = "#bbb";
  }
});

setInterval(animateStatus, 1000);
