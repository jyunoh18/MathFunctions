function calculateArea(width,height) {
	var area = width*height;
  return area;
}

var question = prompt("What is the height");
var question1 = prompt("What is the width");

var wallOne = calculateArea(question,question1);
//this parameter matches with the parameter inside the function//
window.alert(wallOne);