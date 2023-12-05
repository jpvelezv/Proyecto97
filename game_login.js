// Crea la función addUser()
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value
  // Almacena los valores en el almacenamiento local
  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);
  //Asigna "game_page.html" a window.location
  window.location = "game_page.html";
}

