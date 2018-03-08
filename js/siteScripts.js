function arrowChange() {
 	var arrowToggle = true;
  var innerTextChange = document.querySelectorAll('a');
function arrowSwap() {
	if(arrowToggle){
	text2Change.innerText = "&#8679; Project Links &#8679;";
	arrowToggle = false;
}
	else {
	text2Change.innerText = "&#8681; Project Links &#8681;";
	arrowToggle = true;
}
  return arrowSwap;
}
}
