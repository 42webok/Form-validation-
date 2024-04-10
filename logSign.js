// Sign up form vallidation code
var frm_up = document.getElementById("frm_up");
frm_up.onsubmit = function () {
  var user = btoa(document.getElementById("username_up").value);
  var email = btoa(document.getElementById("e-mail").value);
  var pass = btoa(document.getElementById("password_up").value);
  var data_obj = {
    username: user,
    email: email,
    password: pass
  };
  var text_data = JSON.stringify(data_obj);
  if (user != " " && email != " " && pass != " ") {
    localStorage.setItem(email, text_data);
    var button_up = document.getElementById("button_up");
    button_up.style.backgroundColor = "green";
    button_up.innerHTML = "<i class='fa-solid fa-check'> </i> Signup SuccessFull";
    setTimeout(() => {
      button_up.style.backgroundColor = "rgb(199, 114, 255)";
      button_up.innerHTML = "Sign Up";
      frm_up.reset();
    }, 3000);
    return false;
  }
}
// Email validation code
var email_int = document.getElementById("e-mail");
email_int.onchange = function validEmail() {
  var valid = document.getElementById("valid");
  var button_up = document.getElementById("button_up");
  if (localStorage.getItem(btoa(email_int.value)) != null) {
    valid.style.display = "block";
    email_int.style.borderBottomColor = "red";
    button_up.disabled = true;
    button_up.style.backgroundColor = "grey";
    email_int.onclick = function () {
      email_int.value = "";
      valid.style.display = "none";
      button_up.disabled = false;
      email_int.style.borderBottomColor = "rgb(173, 173, 173)";
      button_up.style.backgroundColor = "rgb(199, 114, 255)";
    }
  }
}
// login Validation start 
var frm = document.getElementById("frm");
frm.onsubmit = function () {
  var email = document.getElementById("username");
  var pass = document.getElementById("password");
  var indevo = document.getElementById("indevo");
  var indevo1 = document.getElementById("indevo1");

  if (localStorage.getItem(btoa(email.value)) == null) {
    indevo.style.display = "block";
    email.style.borderBottomColor = "red";
    email.onclick = function () {
      indevo.style.display = "none";
      email.style.borderBottomColor = "rgb(173, 173, 173)";
    }
  }
  else {
    var txt_data = localStorage.getItem(btoa(email.value));
    var obj = JSON.parse(txt_data);
    var vrfyMail = obj.email;
    var vrfyPass = obj.password;
    if (btoa(email.value) == vrfyMail) {
      if (btoa(pass.value) == vrfyPass) {
        sessionStorage.setItem("user", btoa(email.value));
        location.replace("profile.html");
      }
      else {
        indevo1.style.display = "block";
        pass.style.borderBottomColor = "red";
        pass.onclick = function () {
          indevo1.style.display = "none";
          pass.style.borderBottomColor = "rgb(173, 173, 173)";
        }
      }
    }
  }
  return false;
}
// login validation ended