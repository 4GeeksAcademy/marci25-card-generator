/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
      generateCard()
}

  function generateCard(){
    let simbols=["♦" , "♥" , "♠" , "♣"]
    let numbers=[ "A" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" , "8", "9", "10", "J", "Q", "K"];

    let indexSimbols = Math.floor(Math.random()* simbols.length);
    let indexNumbers = Math.floor(Math.random()* numbers.length);

    document.querySelector("#top").innerHTML = simbols[indexSimbols]
    document.querySelector("#number").innerHTML = numbers[indexNumbers]
    document.querySelector("#bottom").innerHTML = simbols[indexSimbols]

    let colorSimbols = simbols[indexSimbols] == "♦" || simbols[indexSimbols] == "♥" ? "text-danger" : "text-dark";

    document.querySelector("#top").className = colorSimbols;
    document.querySelector("#number").className = colorSimbols;
    document.querySelector("#bottom").className = colorSimbols;
  }

  document.querySelector("#start").addEventListener("click", generateCard);

