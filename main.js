var storedValue = [];
var storedFunction = [];
var calcComplete = true;
var isDecimal = false;

function buttonNumber(num) {
	if (calcComplete == true) {
		document.getElementById("screen").innerHTML = "";
		isDecimal = false;
		calcComplete = false;	
	}
	var screenItemsLength = document.getElementById("screen").innerHTML.length
	var screenItems = document.getElementById("screen").innerHTML
	if (screenItemsLength < 10) {
		screenItems = screenItems + num;
		document.getElementById("screen").innerHTML = screenItems;
	}
}
function buttonAC() {
	document.getElementById("screen").innerHTML = "";
	storedValue = [];
	storedFunction = [];
	calcComplete = true;
	isDecimal = false;

}
function buttonC() {
	document.getElementById("screen").innerHTML = "";
	isDecimal = false;
}
function buttonPercent() {
	var screenItems = document.getElementById("screen").innerHTML
	screenItems = (screenItems/100)
	if (String(screenItems) > 10) {
		screenItems = screenItems.toPrecision(8)
	}
	if (String(screenItems).indexOf(".") !== -1){	
		isDecimal = true;
	}
	document.getElementById("screen").innerHTML = screenItems;
}
function buttonSqrt() {
	var screenItems = document.getElementById("screen").innerHTML;
	screenItems = Math.sqrt(screenItems);
	if (String(screenItems).length > 10) {
		screenItems = screenItems.toPrecision(8);
	}
	document.getElementById("screen").innerHTML = screenItems;

}
function buttonDivide() {
	storedValue.push(document.getElementById("screen").innerHTML);
	storedFunction.push("divide");
	document.getElementById("screen").innerHTML = "";

}
function buttonMultiply() {
	storedValue.push(document.getElementById("screen").innerHTML);
	storedFunction.push("multiply");
	document.getElementById("screen").innerHTML = "";
}
function buttonMinus() {
	storedValue.push(document.getElementById("screen").innerHTML);
	storedFunction.push("minus");
	document.getElementById("screen").innerHTML = "";
}
function buttonPlus() {
	storedValue.push(document.getElementById("screen").innerHTML);
	storedFunction.push("plus");
	document.getElementById("screen").innerHTML = "";
}
function buttonEquals() {
	storedValue.push(document.getElementById("screen").innerHTML);
	var result = storedValue[0];
	for (i = 0; i < storedFunction.length; i++){
		if (storedFunction[i] == "plus"){
			result = (Number(result) + Number(storedValue[(i+1)]));	
		} else {
			if (storedFunction[i] == "minus") {
				result = (result - storedValue[(i+1)]);
			} else {
				if (storedFunction[i] == "multiply") {
					result = (result * storedValue[(i+1)]);
				} else {
					if (storedFunction == "divide") {
						result = (result / storedValue[(i+1)]);
					}
				}
			}
		}
	}
	if (String(result).length > 10){
		result = Number(result);
		result = result.toPrecision(7);
	}
	document.getElementById("screen").innerHTML = result;
	storedValue = [];
	storedFunction = [];
	calcComplete = true;
	if (String(result).indexOf(".") !== -1){	
		isDecimal = true;
	}
}
function buttonDecimal() {
	if (calcComplete == true) {
		calcComplete = false;
	}
	screenItems = document.getElementById("screen").innerHTML
	if (isDecimal == false && screenItems.length < 10) {
		document.getElementById("screen").innerHTML = screenItems + ".";
		isDecimal = true;
	}
}
function buttonPressed(btn) {
	document.getElementById(btn).style.backgroundColor = "#222";
	document.getElementById(btn).style.boxShadow = "1px 1px 1px 1px #333";
}
function buttonUnpressed(btn) {
	document.getElementById(btn).style.backgroundColor = "#333";
	document.getElementById(btn).style.boxShadow = "1px 1px 1px 1px #222";
}