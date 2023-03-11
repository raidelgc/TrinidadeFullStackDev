const usuario = {
  login: "raidel",
  password: "1234",
};

function submitForm() {
  const loginInput = document.getElementById("login").value;
  const passwordInput = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (loginInput === usuario.login && passwordInput === usuario.password) {
    alert("Usuario logado");
  } else {
    alert("Credenciais incorretas");
  }
}
