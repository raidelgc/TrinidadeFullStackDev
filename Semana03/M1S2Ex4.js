localStorage.setItem("username", "raidel");

let username = localStorage.getItem("username");
console.log(username);

localStorage.removeItem("username");
console.log(username);

localStorage.setItem("username", "Walberson");
console.log(username);

localStorage.setItem("email", "raidel@gmail.com.br");

let useremail = localStorage.getItem("email");
console.log(useremail);

localStorage.removeItem("email");
console.log(useremail);

localStorage.setItem("useremail", "walberson@gmail.com.br");
console.log(useremail);

localStorage.setItem("url", "https://gmail.com");

let userurl = localStorage.getItem("url");
console.log(userurl);

localStorage.removeItem("email");
console.log(userurl);

localStorage.setItem("useremail", "https://mail.google.com/");
console.log(userurl);
