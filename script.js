/*
2 Juny 2023
Variable
Comments
Operators
Conditional
*/
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

// let iceCream = 'vanilla';
// if(iceCream === 'chocolate'){
//     alert('Yay, I love chocolate icecream!');
// } else{
//     alert('Awwww, but chocolate icecream is my favoruite...');
// }

/*
3 Juny 2023
Functions
*/
// Dinamis
// function penambahan(){
//     console.log(1+5)
// }

// var penambahan = function(){
//     console.log(5+1)
// }

// penambahan()

// Statis
// function penambahan(parameter1, parameter2){
//     return parameter1+parameter2
// }
// console.log(penambahan(1, 5))

// var penambahan = function(parameter1, parameter2){
//     return parameter1+parameter2
// }
// console.log(penambahan(1, 5))

var sapa = prompt('what ur name?')
alert(`hiii ${sapa}`)
alert(`most beatifull girl ever, iya kamu ${sapa}`)
var fine = prompt('How\'d u day bby? y/n')
if(fine === 'y'){
    alert('yayyyyy! always wish you the best of beautiful days forever')
} else{
    alert('aw no matter what happens I will stay by your side and love you forever 3>')
}
alert(`sorry can't be everything for you, it's just as simple as this :(`)
alert(`however i love u forever♥`)
alert(`nice day ${sapa}`)
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


