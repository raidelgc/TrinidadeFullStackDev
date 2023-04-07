const usuario = {
  login: "raidel",
  password: "1234",
};

function submitForm() {
  const loginInput = document.getElementById("login").value;
  const passwordInput = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (loginInput === usuario.login && passwordInput === usuario.password) {
    localStorage.setItem("username", usuario.login);
    localStorage.setItem("password", usuario.password);
    alert("Usuario logado");
  } else {
    alert("Credenciais incorretas");
  }
}

const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

if (storedUsername && storedPassword) {
  if (storedUsername === usuario.login && storedPassword === usuario.password) {
    // Redireciona para a próxima página
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
}
