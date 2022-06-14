$(".continue-button-1").click(function() {
	$(".part-1").fadeOut();
    $(".part-2").fadeIn();
});
$(".continue-button-2").click(function() {
	$(".part-2").fadeOut();
    $(".part-3").fadeIn();
});
$(".continue-button-3").click(function() {
	$(".part-3").fadeOut();
    $(".part-4").fadeIn();
});
$(".walk").click(function() {
	$(".part-4").fadeOut();
    $(".option-1").fadeIn();
});
$(".continue-walking").dblclick(function() {
	$(".option-1").fadeOut();
    $(".option-1-1").fadeIn();
});
$(".stay").click(function() {
	$(".part-4").fadeOut();
    $(".option-2").fadeIn();
});
$(".search").click(function() {
	$(".option-2").slideUp();
    $(".option-2-1").fadeIn();
});
$(".continue-button-2-1").click(function() {
	$(".option-2-1").fadeOut();
    $(".option-2-2").slideDown();
});
$(".light").dblclick(function() {
	$(".option-2-2").fadeOut();
    $(".option-2-3").fadeIn();
});
$(".continue-button-2-3").click(function() {
	$(".option-2-3").fadeOut();
    $(".option-2-4").fadeIn();
});
$(".reset").click(function() {
	$(".option-2-4").fadeOut();
    $(".option-1-1").fadeOut();
    $(".part-1").fadeIn();
});