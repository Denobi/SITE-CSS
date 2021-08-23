// JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  /*TOPO BUTTON*/ 
  var btn = document.querySelector("#back-to-top");
  btn.addEventListener("click", function() {
      window.scrollTo(0, 0);
  });