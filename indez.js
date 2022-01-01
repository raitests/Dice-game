
var num1, num2;
num1 = Math.floor(Math.random()*6 + 1);
num2 = Math.floor(Math.random()*6 + 1);
var a = "dice"+num1+".png";
var b = "dice"+num2+".png";

document.querySelectorAll("img")[0].setAttribute("src", a)
document.querySelectorAll("img")[1].setAttribute("src",b);


if (num1>num2) { 
    document.querySelector("h1").textContent = "🚩 Play 1 won";
} else if(num2>num1){
    document.querySelector("h1").textContent = "Play 2 won 🚩";

} else{
    document.querySelector("h1").textContent = "It's a draw!";

}