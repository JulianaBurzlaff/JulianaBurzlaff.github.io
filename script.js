function clearDisplay() {
    document.getElementById("display").value = "";
}

function display(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const display  = document.getElementById("display").value;
    document.getElementById("display").value = eval(display);
}