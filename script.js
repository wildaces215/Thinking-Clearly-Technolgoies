console.log("js file connected");



function scrollAbout() {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      1000
    );

}
function scrollPortfolio(){
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top,
      },
      1000
    );
}
function scrollContact(){
$("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      1000
    );
}