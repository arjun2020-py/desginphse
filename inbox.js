let saftyPasswrod = "mptc123";

const chatroom_button = document.getElementById("chatbox_button");
if(chatroom_button)
{
chatroom_button.addEventListener("click", askPassword);
}
const passwordInput = document.querySelector("#password");
function getPassword() {
  saftyPassword = passwordInput.value;

  if (saftyPassword) {
    alert("Password successfully saved");
    let link = document.createElement("a")
    link.href = "./parent.html";
    link.click();

  }
  else {
    alert("acess deined")
  }

}

function askPassword(e) {
  e.preventDefault();

  let password = prompt("Give me the password");
  if (saftyPasswrod === password) {
    let link = document.createElement("a")
    link.href = "./chatroom.html";
    link.click();
  }
  else {
    alert("acess deined");
  }

}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/*setup timeinterval for images*/ 
setInterval(()=>plusSlides(1),3000);  

/*add passwroad for add new friend*/
const add_button = document.getElementById("add_button");
if(add_button)
{
add_button.addEventListener("click", AskPassword);
} 
function AskPassword(e) {
  e.preventDefault();

  let password = prompt("Give me the password");
  if (saftyPasswrod === password) {
    let link = document.createElement("a")
    link.href = "./addfriend.html";
    link.click();
  }
  else {
    alert("acess deined");
  }
}