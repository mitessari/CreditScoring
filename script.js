const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".w-nav-menu");
const form = document.querySelector('.formContainer form');
const inputs = document.querySelectorAll('.formContainer form input');
const selects = document.querySelectorAll('.formContainer form select');
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
};
// registration form validation

form.addEventListener('submit', (e) => {
 e.preventDefault();
 inputs.forEach((input) => {
  if(!input.value){
    input.parentElement.classList.add('error');
  } else {
    input.parentElement.classList.remove('error');
    if(input.id == 'email-address'){
      if(validateEmail(input.value)){
      input.parentElement.classList.remove('error');
      } else{
        input.parentElement.classList.add('error');
      }
      }
    }
  
  });
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});




