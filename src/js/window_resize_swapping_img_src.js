window.addEventListener('load', function(){
	var w = window.innerWidth;
	var my_image = document.getElementById("slide_img");

	if(w < 540){
		my_image.setAttribute("src", "images/aib_third_level_smaller.jpg");
	} else {
		my_image.setAttribute("src", "images/aib_third_level_larger.jpg");
	}
});

window.addEventListener('resize', function(){
	var w = window.innerWidth;
	var my_image = document.getElementById("slide_img");

	if(w < 540){
		my_image.setAttribute("src", "images/aib_third_level_smaller.jpg");
	} else {
		my_image.setAttribute("src", "images/aib_third_level_larger.jpg");
	}
});





