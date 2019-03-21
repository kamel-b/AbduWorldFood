
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("openButton").style.display = "none";
}

function messageEnvoi() {
  document.getElementById("thankYouMessage").style.display = "block";
  document.getElementById("myForm").style.display = "none";
}

document.getElementById("myButton").addEventListener("click", function(event){
  event.preventDefault()
});


