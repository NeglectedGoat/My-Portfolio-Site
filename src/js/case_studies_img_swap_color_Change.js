window.addEventListener('load', function(){
	var pageName = getCurrentPageName();
	setImgSrc(pageName);
	checkCaseStudy(pageName);
});
window.addEventListener('resize', function(){
	setImgSrc(getCurrentPageName());
});

var container_element = document.getElementsByClassName("container");
var get_in_touch_cta = document.getElementsByClassName("cta");

function getCurrentPageName(){
	var path = window.location.pathname; // gets full path name
	var break_up_path = path.split("/"); // divides path name into an array of objects which are split up by forward slashes 
	var page = break_up_path.pop(); // removes the last item in the above array (e.g. index.html) and stores it in our page variable
	var find_html = page.indexOf("."); // finds the position before .html in filename
	var slice_url = page.slice("0", find_html); //takes everything from the first character up to just before .html and slices it into a new variable
	// console.log(slice_url);
	return slice_url;
}


function setImgSrc(pageName){
	var w = window.innerWidth;
	var my_images_array = document.getElementsByClassName("slide_img");
	// console.log(my_images_array);

	for(var i = 0; i < my_images_array.length; i++){
		if(w < 540){
			// console.log(my_images_array[i].src);
			my_images_array[i].src = "images/" + pageName + "_smaller" + [i] + ".jpg";
		} else {
			my_images_array[i].src = "images/" + pageName + "_larger" + [i] +  ".jpg";
		}
	}
}

function changeCaseStudyBgColor(color){
	for(var i = 0; i < container_element.length; i++){
		container_element[i].style.backgroundColor = color;
	}
	document.body.style.backgroundColor = color;
	// get_in_touch_cta[0].style.color = "black";
}


function checkCaseStudy(pageName){
	switch (pageName){
		case "casestudy_eir_new_brand_launch":
			var bg_color = "#a6092a";
			changeCaseStudyBgColor(bg_color);
			break;
		case "casestudy_defense_forces":
			var bg_color = "black";
			changeCaseStudyBgColor(bg_color);
			break;
		case "casestudy_millionaire_raffle":
			var bg_color = "#983590";
			changeCaseStudyBgColor(bg_color);
			break;
		case "casestudy_heineken_rugby_club":
			var bg_color = "#005d1f";
			changeCaseStudyBgColor(bg_color);
			break;
		case "casestudy_virgin_media":
			var bg_color = "#005d1f";
			changeCaseStudyBgColor(bg_color);
			break;
		case "casestudy_failte_dublin":
			var bg_color = "#01446b";
			changeCaseStudyBgColor(bg_color);
			break;
		case "casestudy_aib_third_level":
			var bg_color = "#512D6D";
			changeCaseStudyBgColor(bg_color);
			break;
		case "casestudy_em_lotto":
			var bg_color = "#983590";
			changeCaseStudyBgColor(bg_color);
			break;
	}
}


//	function changeImgSrc(pageName){
//		var w = window.innerWidth;
//		var my_images_array = document.getElementsByClassName("slide_img");
//	
//		for(var i = 0; i < my_images_array.length; i++){
//			if(w < 540){
//				my_images_array[i].src = my_images_array[i].src + "_smaller" + ".jpg";
//			} else {
//				my_images_array[i].src = my_images_array[i].src + "_larger" + ".jpg";
//			}
//		}
//	};








