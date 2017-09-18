<input type="number" id="radii">
<button onclick="findVolume()">Find Volume</button>
<p id="showAnswer"></p>

----------------------------------------------------

function findVolume() {
		var x = document.getElementById('radii').value;
    var x = parseInt(x);
    var step1 = ((4/3) * Math.PI);
    var step1 = parseInt(step1);
    var step2 = (Math.pow(X,3) * step1);
    var step2 = parseInt(step2);
    document.getElementById('showAnswer').innerHTML = step2;
}
