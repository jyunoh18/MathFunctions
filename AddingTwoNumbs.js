<input type="number" id="num1">
<input type="number" id="num2">
<button onclick="addTogether()">Add two numbers</button>
<p id="showAnswer"></p>

-------------------------------------------------------
function addTogether() {

var firstNum = document.getElementById('num1').value;
var firstNum = parseInt(firstNum);
var secondNum = document.getElementById('num2').value;
var secondNum = parseInt(secondNum)
var x = firstNum + secondNum;
document.getElementById('showAnswer').innerHTML = x;



}
