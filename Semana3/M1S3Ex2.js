function gerarLink() {
  var telefone = document.getElementById("telefone").value;
  telefone = telefone.replace(/\D/g, "");
  var mensagem = document.getElementById("mensagem").value;
  mensagem = mensagem.replace(/ /g, "%20");
  var link =
    "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + mensagem;
  var linkElement = document.createElement("a");
  linkElement.href = link;
  linkElement.innerText = link;
  document.getElementById("link").innerHTML = "Link gerado: ";
  document.getElementById("link").appendChild(linkElement);
}
