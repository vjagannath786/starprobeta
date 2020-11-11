//Movement Animation to happen
const card = document.querySelectorAll(".card");
const container = document.querySelectorAll(".container");
//Items
const title = document.querySelectorAll(".title");
const sneaker = document.querySelectorAll(".sneaker img");
const purchase = document.querySelectorAll(".purchase");
const description = document.querySelectorAll(".info h3");
const sizes = document.querySelectorAll(".sizes");






//Moving Animation Event
for (let i=0; i< card.length; i++){
card[i].addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  console.log({xAxis})
  console.log({yAxis})
  card[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
}
//Animate In
for (let i=0; i< card.length; i++){
card[i].addEventListener("mouseenter", (e) => {
  card[i].style.transition = "none";
  //Popout
  title[i].style.transform = " perspective(200rem) translateZ(150px)";
  sneaker[i].style.transform = "translateZ(500px)";
  description[i].style.transform = " translateZ(125px)";
  sizes[i].style.transform = "translateZ(100px)";
  purchase[i].style.transform = "translateZ(75px)";
});
}
//Animate Out
for (let i=0; i< card.length; i++){
card[i].addEventListener("mouseleave", (e) => {
  card[i].style.transition = "all 0.5s ease";
  card[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title[i].style.transform = "translateZ(0px)";
  sneaker[i].style.transform = "translateZ(0px) rotateZ(0deg)";
  description[i].style.transform = "translateZ(0px)";
  sizes[i].style.transform = "translateZ(0px)";
  purchase[i].style.transform = "translateZ(0px)";
});
}




