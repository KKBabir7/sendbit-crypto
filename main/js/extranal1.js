 
 
 
 
 
 
 
 /////////////........navbar fixed
		$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() >80);
});
	
	
	
	
	
	
	
	
	/////////////........navbar dropdown
	
	
	
		$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
});
		
		
		
		
		
		
		
		
		
	/////////////........slide 
		
		$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});
		
		
		
		
		
		
		
		
		
	/////////////........mobile menu modal
		
		
		function mobile(){
				var modal = document.getElementById("mobile");
				var span = document.getElementsByClassName("close")[0];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
		   
		
		
		
		
		
		
		
/////////////...................back to top
		
		
		
		
				const scrollToTopButton = document.getElementById('js-top');
			

			window.addEventListener('scroll', () => {
			  // Get the current scroll value
			  let ye = window.scrollY;
			  if (ye > 100) {
				scrollToTopButton.style.bottom = '10px'
			  } else {
				scrollToTopButton.style.bottom = '-200px'
			  }
			})
		
	/////////////...................currancy dropp
		$(".d-m li a").click(function(){
  $(this).parents(".dp").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dp").find('.btn').val($(this).data('value'));
});
		
		
		
		
		
		
		
		
		
	/////////////...............currancy convator
		
		
		
		
var usd, btc;
				function init()
				{
					usd = document.getElementById("USD");
					btc = document.getElementById("BTC");
				   
				}

				function usdfunc()
				{
					btc.value = (parseFloat(usd.value)*10200.30).toFixed(2) ;
					
document.getElementById("save").innerHTML = (btc.value/100*0.10).toFixed(2)+ " EUR";
document.getElementById("save2").innerHTML = (btc.value/100*2).toFixed(2)+ " EUR";


				}

				function btcfunc()
				{
					usd.value = (parseFloat(btc.value)* 0.000084).toFixed(8);

document.getElementById("save").innerHTML = (btc.value/100*0.10).toFixed(2)+ " EUR";
document.getElementById("save2").innerHTML = (btc.value/100*2).toFixed(2)+ " EUR";

				   
				}
init();














/////////////........content animate

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      

      var winTop = $(window).scrollTop();
        if (pos < winTop + 500) {
          $(this).addClass("slide");
        }
		
    });
  });
})




