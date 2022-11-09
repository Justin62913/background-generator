const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

function colorPicker(){
    document.body.style.background = this.value
    document.body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = document.body.style.background
}

color1.addEventListener("input", colorPicker)
color2.addEventListener("input", colorPicker)









