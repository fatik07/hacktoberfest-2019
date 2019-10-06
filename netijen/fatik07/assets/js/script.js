$(document).ready(function() {
    
    // Slider
    var slideIndex = 0;
    showDivs(slideIndex);
    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");  
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";  
        setTimeout(showDivs, 5000);
    }
    // End Slider

    //  Horizontal Scroll
    var $item = $('div.item'), 
        visible = 2, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 2; //End index
    
    $('div#arrowR').click(function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=250px'});
        }
    });
    
    $('div#arrowL').click(function(){
        if(index > 0){
          index--;            
          $item.animate({'left':'+=250px'});
        }
    });
    // End Horizontal Scroll
    
    //Scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#btnTop').fadeIn();
		} else {
			$('#btnTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#btnTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    // End Scroll to top

    // Scroll to section
    $(document).ready(function(){
    $(".navbar_link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        }
        });
    });
    // End scroll to section
});
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide1");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}