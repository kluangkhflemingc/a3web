/*	Owner: Kristine Luangkhot on November 22, 2020 */
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