$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

      items: 1,
      loop: true,
      nav: false,
      dots: false,
    mouseDrag: false,
      item:1,
    margin:15,
    autoplay:true,
    autoplayTimeout:2700,
    autoplayHoverPause:false,
      slideTransition: "" ,
      slideBy:1,
      autoplaySpeed: 1000 ,
      
       responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
           800:{
            items:1
        },
           1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
      
    
  });
    
 
   
});
      
   