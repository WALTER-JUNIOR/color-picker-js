const btnColor = document.getElementById("btnColor")
const colorInput = document.getElementById("colorInput")
const colorExa = document.querySelector(".colorExa")
const colorOutput = document.getElementById("colorOutput")

btnColor.addEventListener("click", () => {
    colorExa.textContent = colorInput.value
    colorOutput.style.backgroundColor =  colorInput.value
});

