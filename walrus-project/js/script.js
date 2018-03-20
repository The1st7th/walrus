
$(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

$(".hello").click(function() {
  console.log("hello");
});

$("p").click(function() {
   $("#walrus-showing").show();
   $("#walrus-hidden").hide();

 });
$("img").click(function() {
    $("#walrus-showing").show();
    $("#walrus-hidden").hide();
 });
 $("#walrus-showing").click(function() {
$("#walrus-hidden").show();
 $("#walrus-showing").hide();

 });
