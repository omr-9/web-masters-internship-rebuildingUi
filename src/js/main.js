// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");

menuIcon.onclick = () => {

  navbar.classList.toggle("hidden");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow", "bg-bgColor", "text-textColor");
    

    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
      link.classList.add("text-textColor");
      link.classList.remove("text-mainColor");
    });
    logo.classList.add("text-textColor");
  } else {
    header.classList.remove("shadow", "bg-bgColor", "text-textColor");
    const links = document.querySelectorAll(".navbar a");
    
    links.forEach(link => {
      link.classList.remove("text-textColor");
      link.classList.add("text-mainColor");
      logo.classList.remove("text-textColor");
    });
  }
});