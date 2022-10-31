const btn = document.querySelector("button");
const body = document.querySelector("body");
const currentColor = document.querySelector(".current_color");
console.log(currentColor.textContent);
function randomColor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const generatedColor = `rgb(${red} ${green} ${blue})`;
    return generatedColor;
}


btn.addEventListener("click",() =>{
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    currentColor.textContent = newColor;
})


