var usuario = {
  login: "raidel",
  password: "1234",
};
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value === usuario.login && password.value === usuario.password) {
    localStorage.setItem("username", username.value);
    window.location.href = "page2.html";
  } else {
    alert("Nome de usuário ou senha incorretos!");
  }
});

if (localStorage.getItem("username")) {
  window.location.href = "page2.html";
}
