function openModal(response) {
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modalText");
  
    if (response === "Yes") {
      modalText.innerHTML = "Let's make it a memorable prom!";
      modal.style.display = "block";
      document.getElementById("hearts-alpaca").style.display = "block";
      document.querySelector(".heart-broken").style.display = "none";
    } else if (response === "No") {
      modalText.innerHTML = "Oh no! Why!";
      modal.style.display = "block";
      document.getElementById("hearts-alpaca").style.display = "none";
      document.querySelector(".heart-broken").style.display = "block";
    }
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  