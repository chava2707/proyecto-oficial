function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (user == "chava" && pass == "1234") {
    window.location = "principal.html";
  } else {
    alert("Datos incorrectos");
  }
}
