// this is the slideshow code

		var slideIndex = 0;
	window.onload = slide();

	function slide() {
	var i;
	var x = document.getElementsByClassName("pics");
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex > x.length) {
	slideIndex = 1
	} 
	x[slideIndex-1].style.display = "block"; 
	setTimeout(slide, 3000);
}