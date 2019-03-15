document.getElementById("myButton").addEventListener("click", messageEnvoi);

function messageEnvoi() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("openButton").style.display = "none";
}