if (notificationStatus) {
    notificationStatus.addEventListener("click", function() {
      animationEnabled = true;
    });
    
    document.addEventListener("click", function(event) {
      if (event.target !== notificationStatus) {
        animationEnabled = false;
        notificationStatus.style.backgroundColor = "#bbb";
      }
    });
    
    setInterval(animateStatus, 1000);
  }