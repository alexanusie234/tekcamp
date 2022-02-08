const re = "/^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$/";

document.getElementById("first-name").addEventListener('blur', validateFirst);
document.getElementById("first-name-error").addEventListener('blur', validateFirst);
document.getElementById("error-circle1").addEventListener('blur', validateFirst);
var element1 = document.getElementById("first-name");

document.getElementById("last-name").addEventListener('blur', validateLast);
document.getElementById("last-name-error").addEventListener('blur', validateLast);
document.getElementById("error-circle2").addEventListener('blur', validateLast);
var element2 = document.getElementById("last-name");

document.getElementById("email").addEventListener('blur', validateEmail);
document.getElementById("email-error").addEventListener('blur', validateEmail);
document.getElementById("error-circle3").addEventListener('blur', validateEmail);
var element3 = document.getElementById("email");

document.getElementById("password").addEventListener('blur', validatePassword);
document.getElementById("password-error").addEventListener('blur', validatePassword);
document.getElementById("error-circle4").addEventListener('blur', validatePassword);
var element4 = document.getElementById("password");

document.getElementById("form-submit").onclick= function() {validateFirst(); validateLast(); validateEmail(); validatePassword(); validateEmailFormat()};
  
function validateFirst() {
    const firstName = document.getElementById("first-name");
    const firstError = document.getElementById("first-name-error");
    const errorCircle1 = document.getElementById("error-circle1");
    const inputText = firstName.value
    
  
    if(!inputText){
      firstError.style.visibility = "visible";
      errorCircle1.style.visibility = "visible";
      element1.classList.add("error");
    } else {
      firstError.style.visibility = "hidden";
      errorCircle1.style.visibility = "hidden";
      element1.classList.remove("error"); 
      
    } 
  }

function validateLast() {
    const lastName = document.getElementById("last-name");
    const lastError = document.getElementById("last-name-error");
    const errorCircle2 = document.getElementById("error-circle2")
    const inputText = lastName.value
  
    if(!inputText){
      lastError.style.visibility = "visible";
      errorCircle2.style.visibility = "visible";  
      element2.classList.add("error");
    } else {
      lastError.style.visibility = "hidden";
      errorCircle2.style.visibility = "hidden";
      element2.classList.remove("error"); 
      
    }  
}
const errorCircle3 = document.getElementById("error-circle3")
const emailError = document.getElementById("email-error");

function validateEmail() {
    const email = document.getElementById("email");
    const inputText = email.value  
  
    if(!inputText){
      emailError.style.visibility = "visible";
      errorCircle3.style.visibility = "visible"; 
      element3.classList.add("error"); 
      document.getElementById("email-error").innerHTML = "Email cannot be empty";

    } else {
      emailError.style.visibility = "hidden";
      errorCircle3.style.visibility = "hidden";
      element3.classList.remove("error"); 
      
    }   
  }
  function checkRe(text) {
    if(!text.match(re)) {
    document.getElementById("email-error").innerHTML = "Please enter valid email address";
    emailError.style.visibility = "visible"
    errorCircle3.style.visibility = "visible"; 
    element3.classList.add("error"); 
   } else {
    emailError.style.visibility = "hidden";
    errorCircle3.style.visibility = "hidden";
    element3.classList.remove("error");
   }
  } 
  
  function validateEmailFormat() {
    const format = document.getElementById("email")
    const inputText = format.value
    
    checkRe(inputText)
}

function validatePassword() {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    const errorCircle4 = document.getElementById("error-circle4")
    const inputText = password.value 
  
    if(!inputText){
      passwordError.style.visibility = "visible";
      errorCircle4.style.visibility = "visible";
      element4.classList.add("error");  
    } else {
      passwordError.style.visibility = "hidden";
      errorCircle4.style.visibility = "hidden";
      element4.classList.remove("error"); 
     
    }  
}
