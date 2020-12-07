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
    document.getElementById("whalemappingcode").src = "images/scripting4output.JPG";
    document.getElementById("whalemappingbutton").innerHTML = "Go back to the code.";
    clicked = 1; }
  else if (clicked == 1) {
    document.getElementById("whalemappingcode").src = "images/scripting4whalemapping.JPG";
    document.getElementById("whalemappingbutton").innerHTML = "'Run' the program!";
    clicked = 0; }
}
 /**********
 End Owner: Corwan Groux
 **********/

/***********
Owner: Andrea Reid
Creation Date: December 7, 2020
Source: https://www.w3schools.com/jsref/event_onclick.asp and https://www.w3schools.com/jsref/prop_img_src.asp
***********/

function changeDigiImage() {
  document.getElementById('myimage_digi').src = "images/digitisation_after_crop.jpg";
}
function changeBuffImage() {
  document.getElementById('myimage_buffer').src = "images/Buffer_After_crop.jpg";
}
function changeModelImage() {
  document.getElementById('myimage_modelbuilder').src = "images/modelbuilder_after.jpg";
}
function changeHabImage() {
  document.getElementById('myimage_snailhab').src = "images/SnailHab_After_crop.jpg";
}

 /**********
 End Owner: Andrea Reid
 **********/
 /***** 
  Owner: Christopher Webb
  December 7th 2020
  The reference material used to learn about the required java script was 
  https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
  *****/
 mybutton = document.getElementById("scollbtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; 
}

/****
 End Owner: Christopher Webb
 */
