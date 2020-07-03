function myFunction() {
  var x = document.getElementById("myMobilenav");
  if (x.className === "mobile-nav") {
    x.className += " responsive";
  } else {
    x.className = "mobile-nav";
  }
}

$(document).ready(
    myFunction()
)

$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
