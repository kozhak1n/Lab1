window.onload = init;

function init(){
    var button = document.getElementById("valueNameButton")
    button.onclick = buttonClick;
}

function buttonClick() {
    var textInput = document.getElementById("valueNameInput");
    var valueName = textInput.value;
    if(valueName == ""){
        alert("Введи число x, ради Бога");
    } else {
        alert(" |"+ valueName + "| = " + Math.abs(valueName));
    }
}

