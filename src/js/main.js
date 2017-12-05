$(function() {

    var width = 845;
    var animationSpeed = 1000;
    var pause = 4000;
    var currentSlide = 1;

    var $slider = $('.slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    setInterval(function(){
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++;
            console.log(currentSlide);
            console.log($slides.length);
            if(currentSlide == $slides.length){
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
    }, pause);
});