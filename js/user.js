/* smooth scroll */

$(document).ready(function() {
   $("a.nav-link").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   }); 
});

/* slick slider */
 $(document).ready(function(){
      $('.multiple-items').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			});
    });