/*********** 
 Owner: Kristine Luangkhot
 Entry Date: November 22, 2020 
 ***********/
/* Copied from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */
/* Show all menu items when the user clicks on the icon, collapse when user clicks on the icon again */
function navBarMin() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
/* End Owner: Kristine Luangkhot */

/***********
Owner: Kristine Luangkhot
Creation Date: November 30, 2020
***********/

/* Use the fadeIn and fadeOut methods from jQuery to create a slideshow of images */
/* Each image that is not shown will be given a class with display: none so it does not show*/
/* activeimage class will be removed and added to each image as it fades in and out */
function swapImages(){
  var $active = $('.photogallery .activeimage');
  var $next = ($('.photogallery .activeimage').next().length > 0) ? $('.photogallery .activeimage').next() : $('.photogallery img:first');
  $active.fadeOut(function(){
  $active.removeClass('activeimage');
  $next.fadeIn().addClass('activeimage');
  });
  }

 /**********
 End Owner: Kristine Luangkhot
 **********/