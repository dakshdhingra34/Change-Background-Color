let bgColorsArray = [
    "#e75d7c",
    "#b16cef",
    "#53cca4",
    "#efc84d",
    "#628ef0",
    "#184b73",
    "#883e7f",
    "#ed048b",
];
let buttonElement = document.getElementById("button");
let bgElement = document.getElementById("bgContainer");
let onChangeBgColor = function() {
    let randomIndex = Math.ceil(Math.random() * 7);
    bgElement.style.backgroundColor = bgColorsArray[randomIndex];
}