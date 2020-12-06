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
/* Inspiration for slideshow taken from: https://www.ecopiatech.com/ */
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

 /***********
Owner: Corwan Groux
Creation Date: December 5, 2020
***********/

/* I consulted W3Schools' article on conditionals https://www.w3schools.com/js/js_if_else.asp and changing image source https://www.w3schools.com/jsref/prop_img_src.asp to create this function.
*/

var clicked = 0;

function runWhaleMapping(){
  if (clicked == 0) {
    document.getElementById("whalemappingcode").src = "images/scripting4output.jpg";
    document.getElementById("whalemappingbutton").innerHTML = "Go back to the code.";
    clicked = 1; }
  else if (clicked == 1) {
    document.getElementById("whalemappingcode").src = "images/scripting4whalemapping.jpg";
    document.getElementById("whalemappingbutton").innerHTML = "'Run' the program!";
    clicked = 0; }
}
 /**********
 End Owner: Corwan Groux
 **********/