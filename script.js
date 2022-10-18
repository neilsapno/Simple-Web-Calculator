var currentInput = "0";
var total;
var input = document.getElementById("inputHolder").value;
var operation = "None";
var firstNum, secondNum;

// NUMBER BUTTONS
function on1Click() {
	if (currentInput == "0") {
		currentInput = "1";
	} else if (total != null) {
		currentInput = "1";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	}
	else {
		currentInput += "1";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on2Click() {
	if (currentInput == "0") {
		currentInput = "2";
	} else if (total != null) {
		currentInput = "2";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "2";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on3Click() {
	if (currentInput == "0") {
		currentInput = "3";
	} else if (total != null) {
		currentInput = "3";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "3";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on4Click() {
	if (currentInput == "0") {
		currentInput = "4";
	} else if (total != null) {
		currentInput = "4";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "4";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on5Click() {
	if (currentInput == "0") {
		currentInput = "5";
	} else if (total != null) {
		currentInput = "5";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "5";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on6Click() {
	if (currentInput == "0") {
		currentInput = "6";
	} else if (total != null) {
		currentInput = "6";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "6";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on7Click() {
	if (currentInput == "0") {
		currentInput = "7";
	} else if (total != null) {
		currentInput = "7";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "7";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on8Click() {
	if (currentInput == "0") {
		currentInput = "8";
	} else if (total != null) {
		currentInput = "8";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "8";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on9Click() {
	if (currentInput == "0") {
		currentInput = "9";
	} else if (total != null) {
		currentInput = "9";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "9";
	}
	document.getElementById("inputHolder").value = currentInput;
}
function on0Click() {
	if (currentInput == "0") {
		currentInput = "0";
	} else if (total != null) {
		currentInput = "0";
		total = null;
		operation = "None";
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	} else {
		currentInput += "0";
		document.getElementById("inputHolder").value = currentInput;
	}
}
function ondotClick() {
	if (document.getElementById("inputHolder").value.includes(".")) {
	} else {
		currentInput += ".";
		document.getElementById("inputHolder").value = currentInput;
	}
}
// end of number buttons
// OPERATION BUTTONS
function onclearClick() {
	currentInput = "0";
	document.getElementById("inputHolder").value = currentInput;
	operation = "None";
	firstNum = null;
	secondNum = null;
	document.getElementById("fNum").innerHTML = "";
	document.getElementById("operatorText").innerHTML =
		"Last operation used: " + operation;
}
function onminusClick() {
	if (currentInput == "0") {
		currentInput = "-";
	} else {
		if (firstNum == null && secondNum == null) {
			firstNum = parseFloat(currentInput);
		} else {
			secondNum = parseFloat(currentInput);
			firstNum = checkOperation(operation, firstNum, secondNum);
			secondNum = null;
		}
		operation = "Subtraction";
		currentInput = "0";
		document.getElementById("fNum").innerHTML = firstNum;
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	}
	document.getElementById("inputHolder").value = currentInput;
}
function onaddClick() {
	if (currentInput == "0") {
		//wala dapat mangyari
	} else {
		if (firstNum == null && secondNum == null) {
			firstNum = parseFloat(currentInput);
		} else {
			secondNum = parseFloat(currentInput);
			firstNum = checkOperation(operation, firstNum, secondNum);
			secondNum = null;
		}
		operation = "Addition";
		currentInput = "0";
		document.getElementById("fNum").innerHTML = firstNum;
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	}
	document.getElementById("inputHolder").value = currentInput;
}
function ondivideClick() {
	if (currentInput == "0") {
		//wala dapat mangyari
	} else {
		if (firstNum == null && secondNum == null) {
			firstNum = parseFloat(currentInput);
		} else {
			secondNum = parseFloat(currentInput);
			firstNum = checkOperation(operation, firstNum, secondNum);
			secondNum = null;
		}
		operation = "Division";
		currentInput = "0";
		document.getElementById("fNum").innerHTML = firstNum;
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	}
	document.getElementById("inputHolder").value = currentInput;
}
function onmultiplyClick() {
	if (currentInput == "0") {
		//wala dapat mangyari
	} else {
		if (firstNum == null && secondNum == null) {
			firstNum = parseFloat(currentInput);
		} else {
			secondNum = parseFloat(currentInput);
			firstNum = checkOperation(operation, firstNum, secondNum);
			secondNum = null;
		}
		operation = "Multiplication";
		currentInput = "0";
		document.getElementById("fNum").innerHTML = firstNum;
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	}
	document.getElementById("inputHolder").value = currentInput;
}
function onmoduloClick() {
	if (currentInput == "0") {
		//wala dapat mangyari
	} else {
		if (firstNum == null && secondNum == null) {
			firstNum = parseFloat(currentInput);
		} else {
			secondNum = parseFloat(currentInput);
			firstNum = checkOperation(operation, firstNum, secondNum);
			secondNum = null;
		}
		operation = "Modulo / Remainder";
		currentInput = "0";
		document.getElementById("fNum").innerHTML = firstNum;
		document.getElementById("operatorText").innerHTML =
			"Last operation used: " + operation;
	}
	document.getElementById("inputHolder").value = currentInput;
}
function onnegClick() {
	if (currentInput == "0") {
		alert(currentInput);
		//wala dapat mangyari
	} else {
		currentInput = currentInput * -1;
	}
	document.getElementById("inputHolder").value = currentInput;
}
// End of operation buttons
// Operation perform
function onequalClick() {
	if (firstNum == null) {
		//wala
	} else {
		document.getElementById("fNum").innerHTML = "";
		secondNum = parseFloat(currentInput);
		total = checkOperation(operation, firstNum, secondNum);
		currentInput = total;
		document.getElementById("inputHolder").value = total;
		firstNum = null;
		secondNum = null;
	}
}
function oneraseClick() {
	if (currentInput.length >= 1 && !currentInput == "0") {
		currentInput = currentInput.substring(0, currentInput.length - 1);
		if (currentInput.length != 0) {
			document.getElementById("inputHolder").value = currentInput;
		} else {
			document.getElementById("inputHolder").value = "0";
		}
	}
}

function checkOperation(userOperation, fNum, sNum) {
	if (userOperation == "Addition") {
		return fNum + sNum;
	} else if (userOperation == "Subtraction") {
		return fNum - sNum;
	} else if (userOperation == "Division") {
		return fNum / sNum;
	} else if (userOperation == "Multiplication") {
		return fNum * sNum;
	} else if (userOperation == "Modulo / Remainder") {
		return fNum % sNum;
	} else {
		onclearClick();
		document.getElementById("inputHolder").value = "ERROR";
	}
}
