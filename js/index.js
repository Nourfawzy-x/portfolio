window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("navbar").style.background = "#f1f1f1";
    document.getElementsByTagName("li").style.color = "white";
  } 
  else{
    document.getElementById("navbar").style.background = "transparent";
    document.getElementsByTagName("li").style.color = "black";
  }
}
 
   