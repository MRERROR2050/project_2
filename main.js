let img =document.querySelector('.img');
let container = document.querySelector('.container');
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

function phones(phone){
    img.src=phone;
}


button1.addEventListener("click", changeBackground);

function changeBackground() {
  
    container.style.background = "linear-gradient(to right,black, gold)";
  }




  
button2.addEventListener("click", changeBackground2);

function changeBackground2() {
  
    container.style.background = "linear-gradient(to right,black, blue)";
  }


  
button3.addEventListener("click", changeBackground3);

function changeBackground3() {
  
    container.style.background = "linear-gradient(to right,black, white)";
  }

  
  
button4.addEventListener("click", changeBackground4);

function changeBackground4() {
  
    container.style.background = "linear-gradient(to right,black,  rgb(218, 198, 174))";
  }


  
  
button5.addEventListener("click", changeBackground5);

function changeBackground5() {
  
    container.style.background = "linear-gradient(to right,black, red";
  }

  
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




  