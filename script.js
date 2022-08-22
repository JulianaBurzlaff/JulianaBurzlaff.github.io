function clearDisplay() {
    document.getElementById("display").value = "";
}

function removeLastDigit() {
    const currentDisplay = document.getElementById("display").value 
    const nextDisplay = currentDisplay.substring(0, currentDisplay.length - 1)
    document.getElementById("display").value = nextDisplay;
}

function display(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const display  = document.getElementById("display").value;
    if(display !== ""){
        document.getElementById("display").value = eval(display);
    }
}

document.onkeydown = function(event) {

	let key_press = String.fromCharCode(event.keyCode);
	let key_code = event.keyCode;
	let inputVal = document.getElementById("display").value;
    let lastChar = inputVal[inputVal.length - 1];
    let equation = inputVal;
    const operators = ['+', '-', 'x', '÷', '^'];
	// Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');

    if(key_press >= 0 && key_press <= 9 && event.shiftKey == false) {
      display(key_press);
    }

    if(key_code === 190 ) {
      display(".")
    }

    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      display("+");
    }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
      display('-');
     }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
      display('*');
     }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
      display('/');
    }

    if(key_code == 13 || key_code == 187 && event.shiftKey == false) {
      calculate()
    }
    if(key_code == 8 || key_code == 46) {
	  removeLastDigit();
    }
}