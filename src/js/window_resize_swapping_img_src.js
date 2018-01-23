window.addEventListener('load',function getCurrentPageName(){
	var path = window.location.pathname; // gets full path name
	var breakUpPath = path.split("/"); // divides path name into an array of objects which are split up by forward slashes 
	var page = breakUpPath.pop(); // removes the last item in the above array (the .html filename) and stores it in our page variable
	var findHtml = page.indexOf("."); // finds the position before .html in filename
	var sliceUrl = page.slice("0", findHtml); //takes everything from the first character up to just before .html and slices it into a new variable
	setImgSrc(sliceUrl);
	changeImgSrc(sliceUrl);
	console.log(pageName);
});

function setImgSrc(pageName){
	var w = window.innerWidth;
	var my_image = document.getElementById("slide_img");

	if(w < 540){
		my_image.setAttribute("src", "images/aib_third_level_smaller.jpg");
	} else {
		my_image.setAttribute("src", "images/aib_third_level_larger.jpg");
	}
};

function changeImgSrc(pageName){
	var w = window.innerWidth;
	var my_image = document.getElementById("slide_img");

	if(w < 540){
		my_image.setAttribute("src", "images/aib_third_level_smaller.jpg");
	} else {
		my_image.setAttribute("src", "images/aib_third_level_larger.jpg");
	}
};








