const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
  alert("click en el botón");
});

$(document).ready(() => {
  $("#myButton").on("click", () => {
    console.log("Hola, estoy utilizando jQuery");
  });
});
