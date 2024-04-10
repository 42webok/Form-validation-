// Code of login and sign up form dispay one by one
var not_account = document.getElementById("not_account");
var login = document.getElementById("login");
var sign_up = document.getElementById("sign_up");
not_account.onclick = function () {
    login.style.display = "block";
    sign_up.style.display = "none";
}
var account = document.getElementById("account");
var login = document.getElementById("login");
var sign_up = document.getElementById("sign_up");
account.onclick = function () {
    login.style.display = "none";
    sign_up.style.display = "block";
}