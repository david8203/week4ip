
$(document).ready(function(){
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();
  
    // Add smooth scrolling to all links in navbar and footer links
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
  
        // Prevent default behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth flow
        // 700 is the millisecs used to load the other page
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
  
          // Add hash (#) to URL
          window.location.hash = hash;
        });
      } 
    });
  
     $(".slideanimate").each(function(){
          $(this).stop().delay(1000).addClass("slide");
      });
  
      $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
      });
      });
  
  })