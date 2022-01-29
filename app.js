const btnColor = document.getElementById("btnColor")
const ColorInput = document.getElementById("ColorInput")
const colorExa = document.querySelector(".colorExa")
const ColorOutput = document.getElementById("ColorOutput")

btnColor.addEventListener("click", () => {
    colorExa.textContent = ColorInput.value
    ColorOutput.style.backgroundColor =  ColorInput.value
});

