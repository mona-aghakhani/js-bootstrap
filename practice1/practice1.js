let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let errEmail = document.getElementById("errorEmail");
let errPhone = document.getElementById("errorPhone");

let form = document.getElementById("form");
let fName = document.getElementById("first-name");
let lName = document.getElementById("last-name");
let info = document.getElementById("info");
let container = document.getElementById("container");
let register = document.getElementById("register");
let showName = document.getElementById("show-name");
let showLName = document.getElementById("show-lname");
let showPhone = document.getElementById("show-phone");
let showEmail = document.getElementById("show-email");

// console.log(form, info);

email.onkeyup = function validationEmail() {
  if (email.value.match(emailPattern)) {
    errEmail.innerHTML = "";
  } else {
    errEmail.innerHTML = "!لطفا فرمت ایمیل به درستی وارد کنید";
  }
};
phone.onkeyup = function validationPhone() {
  if (phone.value.match(phonePattern)) {
    errPhone.innerHTML = "";
  } else {
    errPhone.innerHTML = "!لطفا شماره تماس را به درستی وارد کنید";
  }
};

form.addEventListener("submit", function checkform(e) {
  if (fName.value == "") {
    console.log(0);
    alert("!لطفا نام خود را وارد کنید");
    return false;
  } else if (lName.value == "") {
    console.log(01);
    alert("!لطفا نام  خانوادگی خود را وارد کنید");
    return false;
  } else if (!errEmail.innerHTML == "") {
    console.log(11111);
    alert("!لطفا فرمت ایمیل به درستی وارد کنید");
    return false;
  } else if (!errPhone.innerHTML == "") {
    console.log(22);

    alert("!لطفا شماره تماس را به درستی وارد کنید ");
    return false;
  } else {
    e.preventDefault();
    console.log("ok");
    container.style.display = "none";
    info.style.display = "block";
    register.innerHTML = "اطلاعات شما با موفقیت ثبت شد";
    showName.innerHTML = ` ${fName.value} :نام `;
    showLName.innerHTML = ` ${lName.value} :نام خانوادگی `;
    showEmail.innerHTML = `  ${email.value} :ایمیل `;
    showPhone.innerHTML = `شماره تماس : ${phone.value}`;
  }
});



